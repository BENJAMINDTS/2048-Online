const { createApp } = Vue;

/**
 * 2048 Game Logic & API Integration
 * @author BenjaminDTS
 * @version 1.5.0 (Full Logic + Animations)
 */
createApp({
    data() {
        return {
            grid: [],
            score: 0,
            gameOver: false, // ¡IMPORTANTE! Empieza en false
            playerName: '',
            topScores: [],
            // Apunta a tu API Laravel
            apiUrl: '/api/scores'
        };
    },
    methods: {
        /**
         * Inicializa o reinicia el juego
         */
        initGame() {
            // Matriz 4x4 llena de ceros
            this.grid = Array(4).fill().map(() => Array(4).fill(0));
            this.score = 0;
            this.gameOver = false;
            this.playerName = '';

            // Añadir 2 fichas iniciales
            this.addNewTile();
            this.addNewTile();

            // Cargar ranking
            this.fetchScores();
        },

        /**
         * Añade un 2 (90%) o un 4 (10%) en una celda vacía aleatoria
         */
        addNewTile() {
            let emptyCells = [];
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    if (this.grid[r][c] === 0) emptyCells.push({ r, c });
                }
            }

            if (emptyCells.length > 0) {
                let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                this.grid[randomCell.r][randomCell.c] = Math.random() < 0.9 ? 2 : 4;
            }

            // Verificar si el juego ha terminado después de añadir ficha
            this.checkGameOver();
        },

        /**
         * Lógica de deslizamiento y fusión de una sola fila
         */
        slideRow(row) {
            // 1. Quitar ceros
            let arr = row.filter(val => val);

            // 2. Fusionar iguales adyacentes
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] === arr[i + 1]) {
                    arr[i] *= 2;
                    this.score += arr[i];
                    arr.splice(i + 1, 1); // Eliminar el que se fusionó
                }
            }

            // 3. Rellenar con ceros al final
            while (arr.length < 4) {
                arr.push(0);
            }
            return arr;
        },

        /**
         * Función maestra de movimiento (Left, Right, Up, Down)
         */
        move(direction) {
            if (this.gameOver) return;

            let oldGrid = JSON.stringify(this.grid);

            if (direction === 'ArrowLeft' || direction === 'ArrowRight') {
                for (let i = 0; i < 4; i++) {
                    if (direction === 'ArrowRight') {
                        // Invertir, deslizar, invertir de nuevo
                        this.grid[i] = this.slideRow(this.grid[i].slice().reverse()).reverse();
                    } else {
                        // Deslizar normal (Izquierda)
                        this.grid[i] = this.slideRow(this.grid[i]);
                    }
                }
            } else if (direction === 'ArrowUp' || direction === 'ArrowDown') {
                // Transponer la matriz (columnas se vuelven filas)
                let transposed = this.grid[0].map((_, colIndex) => this.grid.map(row => row[colIndex]));

                for (let i = 0; i < 4; i++) {
                    if (direction === 'ArrowDown') {
                        transposed[i] = this.slideRow(transposed[i].slice().reverse()).reverse();
                    } else {
                        transposed[i] = this.slideRow(transposed[i]);
                    }
                }

                // Transponer de vuelta a la normalidad
                this.grid = transposed[0].map((_, colIndex) => transposed.map(row => row[colIndex]));
            }

            // Solo añadir ficha nueva si algo se movió
            if (oldGrid !== JSON.stringify(this.grid)) {
                this.addNewTile();
            }
        },

        /**
         * Comprueba si no quedan movimientos posibles
         */
        checkGameOver() {
            // Si hay algún 0, no es game over
            let flat = this.grid.flat();
            if (flat.includes(0)) return;

            // Si no hay ceros, comprobar si hay fusiones posibles
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    let current = this.grid[r][c];
                    // Mirar derecha y abajo
                    if (c < 3 && current === this.grid[r][c + 1]) return; // Fusión horizontal posible
                    if (r < 3 && current === this.grid[r + 1][c]) return; // Fusión vertical posible
                }
            }

            // Si llegamos aquí, no hay ceros ni fusiones -> Game Over
            this.gameOver = true;
        },

        /**
         * Guarda el récord en la API Laravel
         */
        async saveScore() {
            if (!this.playerName.trim()) return alert("Por favor escribe un nombre");

            try {
                await axios.post(this.apiUrl, {
                    player_name: this.playerName,
                    score: this.score
                });
                // Recargar ranking y reiniciar
                await this.fetchScores();
                this.initGame();
            } catch (error) {
                console.error("Error saving score:", error);
                alert("Error al guardar la puntuación.");
            }
        },

        /**
         * Obtiene el Top 20 de la API
         */
        async fetchScores() {
            try {
                const response = await axios.get(this.apiUrl);
                this.topScores = response.data;
            } catch (error) {
                console.error("Error fetching scores:", error);
            }
        },

        /**
         * Manejador de teclado
         */
        handleKey(e) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault(); // Evitar scroll de la página
                this.move(e.key);
            }
        }
    },
    mounted() {
        this.initGame();
        window.addEventListener('keydown', this.handleKey);
    }
}).mount('#app');