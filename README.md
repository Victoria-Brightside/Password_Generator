# Generador y Clasificador de Contraseñas

Este proyecto es una aplicación web que permite a los usuarios generar contraseñas seguras con características específicas 
y clasificar dicha contraseña según su nivel de seguridad (débil, media o fuerte). 
También permite ingresar al usuario una contraseña especifica misma que será clasificada de acuerdo a su nivel de seguridad.

## Características

**1. Generador de Contraseñas.**

   Permite generar contraseñas de longitud personalizada (mínimo 8 caracteres).
   Incluye caracteres:
   Letras mayúsculas (A-Z).
   Letras minúsculas (a-z).
   Números (0-9).
   Símbolos especiales (!@#$%^&\*?).
   Genera contraseñas aleatorias cumpliendo con los criterios de seguridad antes mencionados.

**2. Clasificador de Contraseñas.**

   Analiza la seguridad de una contraseña ingresada por el usuario.
   Clasificación en tres niveles:
   Fuerte: Contiene letras mayúsculas, minúsculas, números y símbolos especiales, con una longitud de al menos 8 caracteres.
   Media: Contiene letras y números, con una longitud de al menos 8 caracteres.
   Débil: No cumple con los requisitos anteriores.
   
![genera_contra](https://github.com/user-attachments/assets/4b42bb98-4484-467c-96ab-43c7e7e9ccfc)


# Tecnologías Usadas
## Frontend
**HTML5:** Estructura semántica de la página.

**CSS3:** Estilo de la página.

**JavaScript (ES6):**
   - **Regex:** Uso de expresiones regulares para clasificar contraseñas en niveles de seguridad (fuerte, media o débil) mediante validación de patrones específicos.
   - **Estructuras de control:** Implementación de condicionales (if-else) para evaluar las contraseñas y bucles (for) para generar contraseñas dinámicamente.
     
   - **Funciones Math:** Uso de Math.random() y Math.floor() para seleccionar caracteres aleatorios de una cadena al generar contraseñas.
     
   - **Manejo del DOM:** Actualización dinámica de los elementos HTML, como campos de texto y mensajes de clasificación.
