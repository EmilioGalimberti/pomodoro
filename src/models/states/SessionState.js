export class SessionState {
        constructor(name, duration) {
            // 1. Bloquear instanciación directa (Clase Abstracta)
            if (this.constructor === SessionState) {
                throw new Error("Cannot instantiate abstract class SessionState directly.");
            }
            
            this.name = name;
            this.duration = duration;
        }
    
        getName() {
            return this.name;
        }

        getDuration() {
            return this.duration;
        }

        // 2. Método obligatorio que deben implementar las subclases
        next(context) {
            throw new Error("Method 'next()' must be implemented by subclass.");
        }
    }