# QrGenerator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

Esta documentación proporciona una visión profunda del código fuente de la aplicación Angular para la generación de códigos QR. 
 El proyecto permite a los usuarios ingresar una URL y generar un código QR correspondiente, que luego pueden descargar.

Estructura del Proyecto
El proyecto está organizado de manera que facilita la modularidad y el mantenimiento. A continuación, se detallan los principales componentes, servicios y archivos de estilos utilizados:

src/

app/
components/
app.component.ts: Componente principal que actúa como contenedor de la aplicación. Gestiona el encabezado y el pie de página.
app.component.html: Plantilla asociada al componente principal.
app.component.css: Estilos específicos del componente principal.
qr-generator/
qr-generator.component.ts: Componente responsable de la generación y visualización de códigos QR. Gestiona la lógica de negocio para la entrada de URL y la interacción con el servicio QrService.
qr-generator.component.html: Plantilla que define la interfaz de usuario para el componente de generación de códigos QR.
qr-generator.component.css: Estilos particulares del componente de generación de códigos QR.
services/
qr.service.ts: Servicio que encapsula la funcionalidad para generar y descargar códigos QR. Implementa métodos para interactuar con la API de generación de códigos QR y manejar las operaciones relacionadas con imágenes.
styles.css: Archivo CSS global que define estilos comunes para toda la aplicación, incluyendo reseteos de estilos y estilización específica para componentes clave como el encabezado, formularios y códigos QR.

Componentes Principales
AppComponent
Descripción: Componente principal que contiene la estructura básica de la aplicación, incluyendo el encabezado y el pie de página.
Funcionalidades:
Define el diseño general de la interfaz de usuario.
Utiliza Angular Material para estilizar componentes y asegurar consistencia visual.
QrGeneratorComponent
Descripción: Componente dedicado a la generación y gestión de códigos QR.
Funcionalidades:
Captura la URL ingresada por el usuario y la pasa al servicio QrService para generar el código QR correspondiente.
Proporciona funcionalidad para mostrar el código QR generado y permitir su descarga.
Servicios
QrService
Descripción: Servicio singleton que maneja la lógica de negocio para la generación y descarga de códigos QR.
Funcionalidades:
generateQR(url: string): Método para generar un código QR a partir de una URL especificada.
downloadQR(qrDataUrl: string): Método para descargar la imagen del código QR generado.
Implementación: Utiliza la biblioteca externa para la generación de códigos QR y maneja las operaciones asíncronas para la descarga de imágenes.
Estilos y Personalización
Estilos Globales
Descripción: El archivo styles.css define estilos globales para la aplicación, garantizando coherencia visual en toda la interfaz de usuario.
Estilos:
Reset de estilos para body y html.
Estilización específica para componentes clave como encabezados, formularios y contenedores de códigos QR.
Dependencias Externas
Angular Material
Descripción: Librería utilizada para los componentes y estilos visuales en la interfaz de usuario.
Componentes Utilizados: Botones, inputs y otros componentes para facilitar la experiencia del usuario.
Instalación: Configurado en app.module.ts y extendido a través de la aplicación para mantener consistencia visual y funcional.
Uso y Funcionalidad
La aplicación permite a los usuarios:

Ingresar una URL: A través de un campo de entrada, donde se captura la dirección web deseada.

Generar un Código QR: Al hacer clic en el botón correspondiente, se invoca el servicio QrService para crear un código QR único para la URL ingresada.

Visualizar y Descargar el Código QR: El código QR generado se muestra en pantalla, junto con la opción para descargar la imagen correspondiente.io/cli) page.
