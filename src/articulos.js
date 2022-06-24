export const articulos = {
  'Comentarios': {
    title: 'Comentarios',
    body: `
<article class="entry-body">
  <p>
    Los comentarios son líneas de código que el intérprete o compilador de código ignorará intencionalmente. Los comentarios son una gran manera de dejar notas para ti mismo y a otras personas que más tarde tengan que averiguar qué hace ese código.
  </p>
  <p>
    A medida que programas, deberías añadir comentarios regularmente para aclarar el funcionamiento de las partes de tu código. Un buen comentario puede ayudar a comunicar la intención de tu código, tanto para otros como para ti mismo.
  </p>
  <p>
    Usualmente, hay dos maneras de escribir comentarios, comentarios de línea y comentarios de bloque.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // Este es un comentario de línea

    /* Este es un 
    comentario 
    de bloque*/
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // Este es un comentario de línea
    
    /* Este es un 
    comentario 
    de bloque*/    
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # Este es un comentario de línea

    ''' Este es un 
    comentario 
    de bloque'''    
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
        // Este es un comentario de línea

        /* Este es un 
        comentario 
        de bloque*/    
      }
    }    
  </code></pre>

</article>
    `
  },
  'Variables': {
    title: 'Variables',
    body: `
<article class="entry-body">
  <p>
    Las variables son pequeños contenedores que nos permiten almacenar y manipular datos de forma dinámica. Se hace esto usando una "etiqueta" o “nombre” para apuntar a los datos en lugar de usar los datos en sí. Las variables pueden cambiar su valor durante la ejecución de un programa.
  </p>
  <p>
    Para nombrar las variables utilizaremos identificadores que nos sirven para llamar a la variable cuando queremos trabajar con ella. Un identificador es el nombre que le queremos poner a una variable y puede ser el que sea, pero es preferible que sea descriptivo de lo que contiene.
  </p>
  <p>
    Variable ← valor
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    let nombre = 'mi nombre'

    console.log(nombre);
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    $nombre = 'mi nombre';

    echo $nombre;
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    nombre = 'mi nombre'

    print(nombre) 
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          var nombre = "mi nombre";
          System.out.println(nombre);
      }
    }      
  </code></pre>

</article>
    `
  },
  'Tipos de datos': {
    title: 'Tipos de datos',
    body: `
    <article class="entry-body">
  <p>
    Las variables pueden almacenar tipos de datos de acuerdo a lo que necesitemos. Existen varios tipos de datos según el lenguaje de programación, pero los básicos son los mismos en todos. Estos son:
  </p>
  <table>
    <thead>
      <th>Tipo</th>
      <th>Descripción</th>
    </thead>
    <tbody>
      <tr>
        <td>Enteros</td>
        <td>Números enteros positivos o negativos</td>
      </tr>
      <tr>
        <td>Decimales</td>
        <td>Números con decimales positivos o negativos</td>
      </tr>
      <tr>
        <td>Cadenas</td>
        <td>Conjunto de caracteres alfanuméricos y caracteres especiales @#-?+</td>
      </tr>
      <tr>
        <td>Booleanos</td>
        <td>Solo pueden ser verdadero o falso (true o false)</td>
      </tr>
    </tbody>
  </table>
  <p class="nota">
    Nota: Aunque las cadenas de caracteres pueden contener números, no se pueden hacer operaciones (sumas, por ejemplo) con ellos, tiene que ser de un tipo numérico.
  </p>
  <p class="nota">
    Nota: En algunos lenguajes se debe especificar el tipo de dato (tipado fuerte) y en otros no es necesario (tipado débil).
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    let nombre = 'mi nombre'
    let edad = 20
    let peso = 10.3 
    let vivo = false
    
    console.log(nombre)
    console.log(edad)
    console.log(peso)
    console.log(vivo)    
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    $nombre = 'mi nombre';
    $edad = 20;
    $peso = 10.3; 
    $vivo = false;
    
    echo $nombre."\n";
    echo $edad."\n";
    echo $peso."\n";
    echo $vivo."\n";
    
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    nombre = 'mi nombre'
    edad = 20
    peso = 10.3 
    vivo = False
    
    print(nombre)
    print(edad)
    print(peso)
    print(vivo)
    
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          String nombre = "mi nombre";
          int edad = 20;
          double peso = 10.3;
          boolean vivo = false;
          System.out.println(nombre);
          System.out.println(edad);
          System.out.println(peso);
          System.out.println(vivo);
      }
    }      
  </code></pre>

</article>
    `
  },
  'Constantes': {
    title: 'Constantes',
    body: `
    <article class="entry-body">
  <p>
    Al igual que las variables, las constantes almacenan un valor, pero estos son datos que no cambian durante la ejecución del programa. No obligatorio, pero por convención las constantes suelen escribirse con mayúsculas.
  </p>
  <p>
    Dependiendo del lenguaje de programación, la declaración de constantes puede variar bastante, pero en todos tienen el mismo funcionamiento. 
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    const PI = 3.1416

    console.log(PI)      
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    define('PI', '3.1416'); 

    const PI2 = 3.1416;
    
    echo PI."\n";
    echo PI2."\n";    
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    PI = 3.1416

    print(PI)    
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          final double PI = 3.1416;
          System.out.println(PI);
      }
  }        
  </code></pre>

</article>
    `
  },
  'Operadores aritméticos': {
    title: 'Operadores aritméticos',
    body: `
    <article class="entry-body">
  <p>
    Los operadores aritméticos son los operadores de toda la vida que nos permiten realizar operaciones en nuestros programas, estos son: 
  </p>
  <table>
    <thead>
      <th>Nombre</th>
      <th>Operador</th>
      <th>Ejemplo</th>
    </thead>
    <tbody>
      <tr>
        <td>Suma</td>
        <td>+</td>
        <td>3 + 4</td>
      </tr>
      <tr>
        <td>Resta</td>
        <td>-</td>
        <td>3 - 4</td>
      </tr>
      <tr>
        <td>Multiplicación</td>
        <td>*</td>
        <td>3 * 4</td>
      </tr>
      <tr>
        <td>División</td>
        <td>/</td>
        <td>20 / 7</td>
      </tr>
      <tr>
        <td>Módulo</td>
        <td>%</td>
        <td>20 % 7</td>
      </tr>
    </tbody>
  </table>
  <p class="nota">
    En algunos lenguajes de programación el módulo puede ser un signo diferente.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    let num_1 = 3
    let num_2 = 4
    
    let suma = num_1 + num_2
    let resta = num_1 - num_2
    let multiplicacion = num_1 * num_2
    let divicion = num_1 / num_2
    let modulo = num_1 % num_2
    
    console.log('resultados:')
    console.log('suma: ', suma)
    console.log('resta: ', resta)
    console.log('multiplicacion: ', multiplicacion)
    console.log('divicion: ', divicion)
    console.log('modulo: ', modulo)       
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    $num_1 = 3;
    $num_2 = 4;
    
    $suma = $num_1 + $num_2;
    $resta = $num_1 - $num_2;
    $multiplicacion = $num_1 * $num_2;
    $divicion = $num_1 / $num_2;
    $modulo = $num_1 % $num_2;
    
    print('resultados:'."\n");
    print('suma: '. $suma."\n");
    print('resta: '. $resta."\n");
    print('multiplicacion: '. $multiplicacion."\n");
    print('divicion: '. $divicion."\n");
    print('modulo: '. $modulo."\n");     
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    num_1 = 3
    num_2 = 4
    
    suma = num_1 + num_2
    resta = num_1 - num_2
    multiplicacion = num_1 * num_2
    divicion = num_1 / num_2
    modulo = num_1 % num_2
    
    print('resultados:')
    print('suma: ', suma)
    print('resta: ', resta)
    print('multiplicacion: ', multiplicacion)
    print('divicion: ', divicion)
    print('modulo: ', modulo)     
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          int num_1 = 3;
          int num_2 = 4;
  
          int suma = num_1 + num_2;
          int resta = num_1 - num_2;
          int multiplicacion = num_1 * num_2;
          double divicion = num_1 / num_2;
          int modulo = num_1 % num_2;
  
          System.out.println("resultados:");
          System.out.println("suma: " + suma);
          System.out.println("resta: " + resta);
          System.out.println("multiplicacion: " + multiplicacion);
          System.out.println("divicion: " + divicion);
          System.out.println("modulo: " + modulo);
      }
    }         
  </code></pre>

</article>
    `
  },
  'Operadores de asignación': {
    title: 'Operadores de asignación',
    body: `
    <article class="entry-body">
  <p>
    Sirven para dar valor a las variables.
  </p>
  <p>
    Los operadores aritméticos se pueden combinar con el de operador de asignación “=” y hacer asignaciones al mismo tiempo que sé hacen operaciones.
  </p>
  <table>
    <thead>
      <th>Nombre</th>
      <th>Simbolo</th>      
    </thead>
    <tbody>
      <tr>
        <td>Igual</td>
        <td> = </td>        
      </tr>
      <tr>
        <td>Más igual</td>
        <td> += </td>        
      </tr>
      <tr>
        <td>Menos igual</td>
        <td> -= </td>        
      </tr>
      <tr>
        <td>Multiplicación igual</td>
        <td> *= </td>        
      </tr>
      <tr>
        <td>División igual</td>
        <td> /= </td>        
      </tr>
      <tr>
        <td>Módulo igual</td>
        <td> %= </td>        
      </tr>
    </tbody>
  </table>
  <p>
    Hacer: num1 += num2
  </p>
  <p>
    Es lo mismo que: num1 = num1 + num2
  </p>
  <p>
    Los demás signos funcionan de manera similar haciendo las funciones correspondientes de resta, multiplicación, división y módulo.
  </p>
  <p class="nota">
    Nota: Cabe señalar que no debe haber espacios entre los signos. += funcionará, pero + = no funcionará.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    let num_1 = 12
    let num_2 = 4
    
    console.log('resultados:')
    
    num_1 += num_2      // num_1 = 12 + 4
    console.log('suma: ', num_1)
    
    num_1 -= num_2      // num_1 = 16 - 4
    console.log('resta: ', num_1)
    
    num_1 *= num_2      // num_1 = 12 * 4
    console.log('multiplicacion: ', num_1)
    
    num_1 /= num_2      // num_1 = 48 / 4
    console.log('divicion: ', num_1)
    
    num_1 %= num_2      // num_1 = 12 % 4
    console.log('modulo: ', num_1)          
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    $num_1 = 12;
    $num_2 = 4;
    
    echo ('resultados:'."\n");
    
    $num_1 += $num_2;      // num_1 = 12 + 4
    echo('suma: '. $num_1."\n");
    
    $num_1 -= $num_2;      // num_1 = 16 - 4
    echo('resta: '. $num_1."\n");
    
    $num_1 *= $num_2;      // num_1 = 12 * 4
    echo('multiplicacion: '. $num_1."\n");
    
    $num_1 /= $num_2;      // num_1 = 48 / 4
    echo('divicion: '. $num_1."\n");
    
    $num_1 %= $num_2;      // num_1 = 12 % 4
    echo('modulo: '. $num_1."\n");       
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    num_1 = 12
    num_2 = 4
    
    print('resultados:')
    
    num_1 += num_2      # num_1 = 12 + 4
    print('suma: ', num_1)
    
    num_1 -= num_2      # num_1 = 16 - 4
    print('resta: ', num_1)
    
    num_1 *= num_2      # num_1 = 12 * 4
    print('multiplicacion: ', num_1)
    
    num_1 /= num_2      # num_1 = 48 / 4
    print('divicion: ', num_1)
    
    num_1 %= num_2      # num_1 = 12 % 4
    print('modulo: ', num_1)      
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          int num_1 = 12;
          int num_2 = 4;
  
          System.out.println("resultados:");
  
          num_1 += num_2;      // num_1 = 12 + 4
          System.out.println("suma: " + num_1);
  
          num_1 -= num_2;     // num_1 = 16 - 4
          System.out.println("resta: " + num_1);
  
          num_1 *= num_2;     // num_1 = 12 * 4
          System.out.println("multiplicacion: " + num_1);
  
          num_1 /= num_2;     // num_1 = 48 / 4
          System.out.println("divicion: " + num_1);
  
          num_1 %= num_2;     // num_1 = 12 % 4
          System.out.println("modulo: " + num_1);
      }
  }
   
  </code></pre>

</article>
    `
  },
  'Operadores condicionales': {
    title: 'Operadores condicionales',
    body: `
    <article class="entry-body">
  <p>
    Los operadores condicionales indican si se cumple o no una condición. El resultado de la operación solo puede ser dos valores: positivo (true) si se cumple la condición y negativo (false) si no se cumple.
  </p>
  <p>
    Estos operadores son parte fundamental de las estructuras condicionales, que veremos más adelante, y que permiten que el programa elija entre dos opciones dependiendo de si la condición indicada se cumple o no.
  </p>
  <table>
    <thead>
      <th>Nombre</th>
      <th>Simbolo</th>
      <th>Ejemplo</th>
    </thead>
    <tbody>
      <tr>
        <td>Igualdad</td>
        <td> == </td>        
        <td>1 == 2 (false)</td>
      </tr>
      <tr>
        <td>Distinto</td>
        <td> != </td>     
        <td>1 != 2 (true)</td>   
      </tr>
      <tr>
        <td>Mayor que</td>
        <td> &gt; </td>  
        <td>1 &gt; 2 (false)</td>      
      </tr>
      <tr>
        <td>Menor que</td>
        <td> &lt; </td>  
        <td>1 &lt; 2 (true)</td>      
      </tr>
      <tr>
        <td>Mayor o igual</td>
        <td> &gt;= </td>
        <td>1 &gt;= 2 (false)</td>        
      </tr>
      <tr>
        <td>Menor o igual</td>
        <td> &lt;= </td>  
        <td>1 &lt;= 2 (true)</td>      
      </tr>
    </tbody>
  </table>

</article>
    `
  },
  'if': {
    title: 'if',
    body: `
    <article class="entry-body">
  <p>
    Las sentencias if son utilizadas para tomar decisiones en el código. La palabra clave if le dice al intérprete o compilador que ejecute el código entre llaves bajo ciertas condiciones, definidas en los paréntesis. Estas condiciones son conocidas como condiciones booleanas (Boolean) y solo pueden ser true o false.
  </p>
  <p>
    Cuando la condición se evalúa como true, el programa ejecuta el comando dentro de las llaves. Cuando la condición booleana se evalúa como false, la sentencia dentro de las llaves no se ejecutará.
  </p>
  <p><strong>Pseudocódigo</strong></p>
  <pre><code>
    si (la condición es verdadera) {
      la sentencia es ejecutada
   }   
  </code></pre>
  <p class="nota">
    Nota: En algunos lenguajes, por ejemplo, Python, la indentación (espacio entre el inicio del renglón y el inicio de la sentencia) es muy importante, si no se indenta correctamente, el código no funcionará.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // prueba cambiando el operador condicional por otro
    let dinero = 120
    
    if ( dinero > 0 ){
        console.log("Tengo dinero!!!")
    }           
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // prueba cambiando el operador condicional por otro
    $dinero = 120;
    
    if ( $dinero > 0 ){
        echo("Tengo dinero!!!");
    }        
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # prueba cambiando el operador condicional por otro
    dinero = 120
    
    if ( dinero > 0 ):
        print("Tengo dinero!!!")      
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // prueba cambiando el operador condicional por otro
           int dinero = 120;
  
          if ( dinero > 0 ){
              System.out.println("Tengo dinero!!!");
          }
      }
  }  
  </code></pre>

</article>
    `
  },
  'else': {
    title: 'else',
    body: `
    <article class="entry-body">
  <p>
    Cuando la condición en una sentencia if es verdadera, se ejecutará el bloque de código que va a continuación. ¿Qué sucede cuando la condición es falsa? Normalmente, no debería ocurrir nada. Con la sentencia else, se puede ejecutar un bloque alternativo de código, incluso se podría evaluar otra condición y encadenar condiciones.
  </p>
  <p><strong>Pseudocódigo</strong></p>
  <pre><code>
    si (la condición es verdadera) {
      la sentencia es ejecutada
    }
    si no {
      otra sentencia es ejecutada
    }     
  </code></pre>

  <h5>JavaScript</h5>
  <pre><code>
    // prueba cambiando el mensaje por rechazado 
    let mensaje = 'aceptado'
    
    if (mensaje == 'aceptado'){
        console.log("Felicidades, fuiste aceptado")
    }
    else {
        console.log("Lo siento no fuiste aceptado")
    }
           
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // prueba cambiando el mensaje por rechazado 
    $mensaje = 'aceptado';
    
    if ($mensaje == 'aceptado'){
        echo ("Felicidades, fuiste aceptado");
    }
    else {
        echo("Lo siento no fuiste aceptado");
    }       
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # prueba cambiando el mensaje por rechazado 
    mensaje = 'aceptado'
    
    if (mensaje == 'aceptado'):
        print("Felicidades, fuiste aceptado")
    else :
        print("Lo siento no fuiste aceptado")         
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // prueba cambiando el mensaje por rechazado 
          String mensaje = "aceptado";
  
          if (mensaje == "aceptado"){
              System.out.println("Felicidades, fuiste aceptado");
          }
          else {
              System.out.println("Lo siento no fuiste aceptado");
          }
      }
    }
  </code></pre>

</article>
    `
  },
  'switch': {
    title: 'switch',
    body: `
    <article class="entry-body">
  <p>
    Si tienes muchas opciones para elegir, usa un switch. La sentencia switch es similar a una serie de sentencias “if” en la misma expresión. En muchas ocasiones, es posible que se quiera comparar la misma variable (o expresión) con muchos valores diferentes, y ejecutar una parte de código distinta dependiendo de a que valor es igual. Para esto es exactamente la expresión switch. 
  </p>
  <p>
    Las sentencias se ejecutan desde el primer valor case coincidente hasta que se encuentra un break.
  </p>
  <p>
    En una sentencia switch puede que no seas capaz de especificar todos los valores posibles como declaraciones “case”. En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.
  </p>
  <p>
    Una declaración default debe ser el último caso.
  </p>
  <p class="nota">
    Nota: En algunos lenguajes (por ejemplo Python) no existe la sentencia switch, en su lugar usamos una serie de if else encadenados.
  </p>
  <p><strong>Pseudocódigo</strong></p>
  <pre><code>
    cambiar ( valor a evaluar) {
      caso 1 : se ejecuta sentencia 1
      caso 2 : se ejecuta sentencia 2
      caso 3 : se ejecuta sentencia 3
      caso default : se ejecuta sentencia default
    }        
  </code></pre>

  <h5>JavaScript</h5>
  <pre><code>
    // prueba cambiando el animal
    let animal = 'perro'
    
    switch ( animal ){
        case 'perro' :
            console.log("me gustan los perros")
            break
        case 'gato' : 
            console.log("me gustan los gatos")
            break
        case 'delfin' :
            console.log("me gustan los delfines")
            break
        default : 
            console.log("no me gustan los animales")
            break
    }                
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // prueba cambiando el animal
    $animal = 'perro';
    
    switch ( $animal ){
        case 'perro' :
            echo("me gustan los perros");
            break;
        case 'gato' : 
            echo("me gustan los gatos");
            break;
        case 'delfin' :
            echo("me gustan los delfines");
            break;
        default : 
            echo("no me gustan los animales");
            break;
    }         
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # prueba cambiando el animal
    animal = 'perro'
    
    if ( animal == 'perro' ):
        print("me gustan los perros")
        
    elif (animal == 'gato'):
        print("me gustan los gatos")
        
    elif (animal == 'delfin'):
        print("me gustan los delfines")
        
    else:
        print("no me gustan los animales")           
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // prueba cambiando el animal
          String animal = "perro";
  
          switch ( animal ){
              case "perro" :
                  System.out.println("me gustan los perros");
                  break;
              case "gato" : 
                  System.out.println("me gustan los gatos");
                  break;
              case "delfin" :
                  System.out.println("me gustan los delfines");
                  break;
              default : 
                  System.out.println("no me gustan los animales");
                  break;
          }
      }
    }  
  </code></pre>

</article>
    `
  },
  'Operadores lógicos': {
    title: 'Operadores lógicos',
    body: `
    <article class="entry-body">
  <p>
    Los operadores lógicos se emplean en combinación con los operadores condicionales y permiten comprobar si se cumplen o no varias condiciones al mismo tiempo. Su resultado es también verdadero (true) o falso (false).
  </p>
  <p>
    Estos son: operador de conjunción “y” (and), operador de disyunción “o” (or) y operador de negación “no” (not).
  </p>
  <table>
    <thead>
      <th>Nombre</th>
      <th>Simbolo</th>
      <th>Descripción</th>
    </thead>
    <tbody>
      <tr>
        <td>and</td>
        <td>&&</td>
        <td>Todas las sentencias tienen que cumplirse (ser true) para validar la condición</td>
      </tr>
      <tr>
        <td>or</td>
        <td>||</td>
        <td>Si una sentencia se cumple (true) es suficiente para validar la condición</td>
      </tr>
      <tr>
        <td>not</td>
        <td>!</td>
        <td>Cambia el valor de la sentencia </td>
      </tr>
    </tbody>
  </table>  
  <p class="nota">
    Nota: Para entender más a profundidad y hacer sentencias más complejas puedes investigar sobre la lógica proposicional, aunque normalmente se trata de minimizar la complejidad.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    let pais = 'chile'
    let edad = 19
    let enfermo = true
    
    // si no estas enfermo y eres mayor de 18, puedes viajar
    if ( !enfermo && edad > 18 ){  
        console.log("puedes viajar")
    }
    
    // si estas enfermo o eres de chile, debes descansar
    if ( enfermo || pais == 'chile'){
        console.log("debes descansar")
    }          
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    $pais = 'chile';
    $edad = 19;
    $enfermo = true;
    
    // si no estas enfermo y eres mayor de 18, puedes viajar
    if ( !$enfermo && $edad > 18 ){  
        echo("puedes viajar");
    }
    
    // si estas enfermo o eres de chile, debes descansar
    if ( $enfermo || $pais == 'chile'){
        echo("debes descansar");
    }                 
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    pais = 'chile'
    edad = 19
    enfermo = True
    
    # si no estas enfermo y eres mayor de 18, puedes viajar
    if ( not enfermo and edad > 18 ):
        print("puedes viajar")
    
    # si estas enfermo o eres de chile, debes descansar
    if ( enfermo or pais == 'chile'):
        print("debes descansar")             
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          String pais = "chile";
          int edad = 19;
          boolean enfermo = true;
  
          // si no estas enfermo y eres mayor de 18, puedes viajar
          if ( !enfermo && edad > 18 ){  
              System.out.println("puedes viajar");
          }
  
          // si estas enfermo o eres de chile, debes descansar
          if ( enfermo || pais == "chile"){
              System.out.println("debes descansar");
          }
      }
    }  
  </code></pre>

</article>
    `
  },
  'for': {
    title: 'for',
    body: `
    <article class="entry-body">
  <p>
    Para ejecutar el mismo código múltiples veces se hace usando un bucle.
  </p>
  <p>
    El tipo más común de bucle se llama bucle for porque se ejecuta "por" un número específico de veces. Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:
  </p>
  <p><strong>Pseudocódigo</strong></p>
  <pre><code>
    for (expresión 1; expresión 2; expresión 3){
      sentencia
  }  
  </code></pre>  
  <p>
    La primera expresión (expresión 1) es evaluada (ejecutada) una vez incondicionalmente al comienzo del bucle.
  </p>
  <p>
    En el comienzo de cada iteración, se evalúa expresión 2. Si se evalúa como true, el bucle continúa y se ejecutan la/s sentencia/s anidada/s. Si se evalúa como false, finaliza la ejecución del bucle.
  </p>
  <p>
    Al final de cada iteración, se evalúa (ejecuta) expresión 3. 
  </p>
  <p class="nota">
    Nota: es muy común en los bucles utilizar el operador de incremento o decremento para hacer la actualización de la variable de control para que limite la ejecución del bucle, estas son variable++ y variable-- para incrementar y decrementar de 1 en 1, puede cambiarse por el número que se necesite por ejemplo variable+2 o variable-2.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // contando los días de la semana con un bucle for

    for ( let i = 1; i <= 7; i++){
        console.log("día ", i, " la semana")
    }    
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // contando los días de la semana con un bucle for

    for ( $i = 1; $i <= 7; $i++){
        echo("día " . $i . " la semana" . "\n");
    }                  
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # contando los días de la semana con un bucle for

    for i in range(1, 8):
        print("día ", i, " la semana")                
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // contando los días de la semana con un bucle for
  
          for ( int i = 1; i <= 7; i++){
              System.out.println("día " + i + " la semana");
          }
      }
    }  
  </code></pre>

</article>
    `
  },
  'while': {
    title: 'while',
    body: `
    <article class="entry-body">
  <p>
    Los bucles while son el tipo más sencillo de bucle, se llama bucle while porque ejecuta una condición específica mientras esta sea verdadera, y se detiene una vez que esa condición ya no sea verdadera.
  </p>
  <p><strong>Pseudocódigo</strong></p>
  <pre><code>
    while (expresión){
      sentencia
  }  
  </code></pre>  
  <p>
    El valor de la expresión es verificado cada vez al inicio del bucle, por lo que incluso si este valor cambia durante la ejecución de las sentencias anidadas, la ejecución no se detendrá hasta el final de la iteración, cada vez que se ejecutan las sentencias es una iteración. Si la expresión while se evalúa como false desde el principio, las sentencias anidadas no se ejecutarán ni siquiera una vez.  
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // contando los días de la semana con un bucle while

    let i = 1
    while( i <= 7){
        console.log("día ", i, " la semana")
        i++
    }      
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // contando los días de la semana con un bucle while

    $i = 1;
    while( $i <= 7){
        echo("día " . $i . " la semana" . "\n");
        $i++;
    }                    
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # contando los días de la semana con un bucle while

    i = 1
    while i <= 7:
        print("día ", i, " la semana")
        i += 1                
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // contando los días de la semana con un bucle while
  
          int i = 1;
          while( i <= 7){
              System.out.println("día " + i + " la semana");
              i++;
          }
      }
    }  
  </code></pre>

</article>
    `
  },
  'do while': {
    title: 'do while',
    body: `
    <article class="entry-body">
  <p>
    Los bucles do-while son muy similares a los bucles while, excepto que la expresión verdadera es verificada al final de cada iteración en lugar de al principio. La diferencia principal con los bucles while es que está garantizado que ejecute la primera iteración de un bucle do-while (la expresión verdadera solo es verificada al final de la iteración).
  </p>
  <p><strong>Pseudocódigo</strong></p>
  <pre><code>
    do (expresión){
      sentencia
    } while (expresión)  
  </code></pre>  
  <p class="nota">
    Nota: Algunos lenguajes de programación, por ejemplo Python, no tienen bucles do while  
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // contando los días de la semana con un bucle do while

    let i = 1
    do {
        console.log("día ", i, " la semana")
        i++
    } while( i <= 7)        
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // contando los días de la semana con un bucle do while

    $i = 1;
    do {
        echo("día " . $i . " la semana" . "\n");
        $i++;
    } while( $i <= 7);                      
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // contando los días de la semana con un bucle do while
  
          int i = 1;
          do {
              System.out.println("día " + i + " la semana");
              i++;
          } while( i <= 7);
      }
    }  
  </code></pre>

</article>
    `
  },
  'Arreglos (array)': {
    title: 'Arreglos (array)',
    body: `
    <article class="entry-body">
  <p>
    Un array es una variable en la que podemos guardar varios datos o variables agrupados a la vez. Estos forman una lista, la cual tiene un único nombre. Por ejemplo, podemos guardar en un array llamado “semana” los días de la semana, o en “meses” los nombres de los meses del año, o en “clientes” los nombres de los clientes habituales de un negocio.
  </p>
  <p>
    Dependiendo del lenguaje de programación y las fuentes de información podemos encontrarlos con el nombre de "vectores", "listas" o "arreglos".
  </p>
  <p>
    Un array se representa típicamente con valores encerrados en corchetes separados por comas y cuentan con una posición, esto se llama índice o index, normalmente se empieza desde el cero, por ejemplo:
  </p>  
  <pre><code>
    [valor, valor, valor, valor]
       0      1      2      3  
  </code></pre>  
  <p>
    Para acceder al elemento que queramos, usamos el índice, por ejemplo:
  </p>
  <p>
    variable[ 2 ] esto nos dará el tercer valor porque estamos contando el cero también.
  </p>
  <p>
    Una diferencia importante entre lenguajes de programación es que algunos como JavaScript permiten combinar tipos de datos, pudiendo tener números, string, arrays, etc. juntos en el mismo arreglo, y otros como Java solo permiten datos del mismo tipo.
  </p>
  <p class="nota">
    Nota: podemos recorrer todos los elementos de un array usando bucles.
  </p>
  <p class="nota">
    Nota: la forma de hacer arrays puede ser diferente entre lenguajes y no siempre son corchetes.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // declarar un arreglo
    let frutas = [ "manzana", "pera", "platano", "uva" ]
    
    // aceder a un elemento
    console.log( "fruta ", frutas[1], " elegida" )  
    
    // acceder a todos los elementos
    for ( let i = 0; i < 4; i++){
        console.log( frutas[ i ] )
    }          
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // declarar un arreglo
    $frutas = [ "manzana", "pera", "platano", "uva" ];
    
    // aceder a un elemento
    echo( "fruta " . $frutas[1] . " elegida" ."\n" );
    
    // acceder a todos los elementos
    for ( $i = 0; $i < 4; $i++){
        echo( $frutas[ $i ] . "\n" );
    }                         
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # declarar un arreglo
    frutas = [ "manzana", "pera", "platano", "uva" ]
    
    # aceder a un elemento
    print( "fruta ", frutas[1], " elegida" )  
    
    # acceder a todos los elementos
    for i in range(0, 4):
        print( frutas[ i ] )    
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // declarar un arreglo
          String[] frutas = { "manzana", "pera", "platano", "uva" };
  
          // aceder a un elemento
          System.out.println( "fruta " + frutas[1] + " elegida" );
  
          // acceder a todos los elementos
          for ( int i = 0; i < 4; i++){
              System.out.println( frutas[ i ] );
          }
      }
    }  
  </code></pre>

</article>
    `
  },
  'Arreglos anidados': {
    title: 'Arreglos anidados',
    body: `
    <article class="entry-body">
  <p>
    Una forma más compleja de usar los arreglos es tener arreglos dentro de arreglos, de esta forma tendríamos más información en caso de necesitarla y es algo que se usa bastante, podemos encontrarlos como matrices, arrays anidados o array multidimensional, pero el funcionamiento es el mismo que los array normales, accedemos a ellos usando su índice o clave, por ejemplo:
  </p>
  <pre><code>
    [
      [ perro, gato,  delfin ],
      [ auto,  avion, barco  ],
      [ dia,   mes,   año    ]
    ]
  </code></pre>  
  <p>
    Esta es una matriz de 3x3 accediendo a variable[ 0 ][ 1 ] nos dará el valor de “gato”.
  </p>
  <p>
    Los array dentro no siempre tienen que tener el mismo tamaño, pueden ser diferentes según lo necesitemos, por ejemplo:
  </p>
  <pre><code>
    [
      [ nombre, apellido ],
      edad - 21,
      { marca - pato, precio - 1000 }
    ]  
  </code></pre>

  <h5>JavaScript</h5>
  <pre><code>
    // declarar e inicializar arreglo 2D
    let numeros = [ [2, 7, 9], [3, 6, 1], [7, 4, 2] ]
            
    // acceder a un elemento
    console.log( "el numero elegido es: ", numeros[ 1 ][ 0 ] )
     
    // imprimir arreglo 2D
    for (let i = 0; i < 3 ; i++){
      let linea = ''
      for (let j = 0; j < 3 ; j++){
          linea += numeros[ i ][ j ] + " "
      }    
      console.log(linea)
    }        
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // declarar e inicializar arreglo 2D
    $numeros = [ [2, 7, 9], [3, 6, 1], [7, 4, 2] ];
            
    // acceder a un elemento
    echo( "el numero elegido es: " . $numeros[ 1 ][ 0 ] . "\n");
     
    // imprimir arreglo 2D
    for ( $i = 0; $i < 3 ; $i++){
      for ( $j = 0; $j < 3 ; $j++){
          echo($numeros[ $i ][ $j ] . " ");
      }    
      echo("\n");
    }                       
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # declarar e inicializar arreglo 2D
    numeros = [ [2, 7, 9], [3, 6, 1], [7, 4, 2] ]
            
    # acceder a un elemento
    print( "el numero elegido es: ", numeros[ 1 ][ 0 ] )
     
    # imprimir arreglo 2D
    for i in range(0, 3):
      for j in range(0, 3):
        print(numeros[ i ][ j ], " ", end="")
      print()      
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
        // declarar e inicializar arreglo 2D
        int[][] numeros = { {2, 7, 9}, {3, 6, 1}, {7, 4, 2} };
        
        // acceder a un elemento
        System.out.println( "el numero elegido es: " + numeros[ 1 ][ 0 ] );
  
        // imprimir arreglo 2D
        for (int i = 0; i < 3 ; i++){
          for (int j = 0; j < 3 ; j++){
            System.out.print( numeros[ i ][ j ] + " ");
          }    
          System.out.println();    
        }
      }
    }  
  </code></pre>

</article>
    `
  },
  'Array asociativo': {
    title: 'Array asociativo',
    body: `
    <article class="entry-body">
  <p>
    Además de los array normales o indexados están los array asociativos, igualmente dependiendo del lenguaje de programación y las fuentes de información podemos encontrarlos con el nombre de "objetos", "tabla hash" o "diccionario".
  </p>
  <p>
    En un array asociativo define una relación uno a uno entre clave y valor. Es decir, si los comparamos con los arrays indexados, el valor será el elemento en sí, mientras que la clave será el índice con el que llamamos al elemento.
  </p>
  <p>
    Normalmente, se representa pares clave - valor encerrados en llaves separados por comas, por ejemplo:
  </p>
  <pre><code>
    { clave - valor, clave - valor, clave - valor }
  </code></pre>  
  <p>
    Para acceder o poder leer un elemento de un array asociativo, debemos saber su clave, la cual la escribiremos entre corchetes después de la variable que lo contiene, por ejemplo:
  </p>

  <pre><code>
    { nombre - raul, edad - 12, pais - canada }
  </code></pre>
  <p>
    variable[ pais ] nos dará el valor “canada”.
  </p>
  <p class="nota">
    Nota: podemos recorrer todos los elementos de un array asociativo usando bucles.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // declarar un arreglo asosiativo (objeto en JavaScript)
    let mascota = {
        nombre: "toby",
        patas: 4,
        color: "cafe"
    }
            
    // acceder a un elemento
    console.log( "nombre de mascota: ", mascota["nombre"] )
    
    // acceder a todos los elementos
    for (let prop in mascota){
        console.log("propiedad: ", prop, "| valor: ", mascota[prop] )
    }         
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // declarar un arreglo asosiativo (mapa ordenado en PHP)
    $mascota = [
        "nombre"=> "toby",
        "patas"=> 4,
        "color"=> "cafe"
    ];
            
    // acceder a un elemento
    echo( "nombre de mascota: " . $mascota["nombre"] . "\n");
    
    // acceder a todos los elementos
    foreach ( $mascota as $prop => $valor ){
        echo("propiedad: " . $prop . "| valor: " . $valor . "\n");
    }                     
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # declarar un arreglo asosiativo (diccionario en Python)
    mascota = {
        "nombre": "toby",
        "patas": 4,
        "color": "cafe"
    }
            
    # acceder a un elemento
    print( "nombre de mascota: ", mascota["nombre"] )
    
    # acceder a todos los elementos
    for prop in mascota:
        print("propiedad: ", prop, "| valor: ", mascota[prop] )
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    import java.util.HashMap;

    class Main {
        public static void main(String[] args) {
            
            // declarar un arreglo asosiativo (HashMap en Java)
            HashMap<String, String> mascota = new HashMap<>();
            
            mascota.put("nombre", "toby");
            mascota.put("patas", "4");
            mascota.put("color", "cafe");
            
            // acceder a un elemento
            System.out.println( "nombre de mascota: " + mascota.get("nombre") );
     
            // acceder a todos los elementos
            for (String clave : mascota.keySet()) {
                String valor = mascota.get(clave);
                System.out.println("propiedad: " + clave + "| valor: " + valor );
            }
        }
    }    
  </code></pre>

</article>
    `
  },
  'Funciones': {
    title: 'Funciones',
    body: `
    <article class="entry-body">
  <p>
    Es posible separar nuestro código en partes reutilizables llamadas funciones.
  </p>
  <p>
    Una función es un grupo de instrucciones que realiza una tarea, estas instrucciones están agrupadas en un mismo bloque, el cual puede ser llamado desde cualquier parte del código.
  </p>
  <p>
    Esto hace que no tengamos que repetir un cierto código cada vez que queramos realizar la misma tarea, ya que basta con hacer una llamada a la función y esta se ejecuta.
  </p>
  <p>
    Las funciones igual que las variables llevan un nombre relacionado con lo que el código hace y se ven normalmente de esta forma:
  </p>
  <p><strong>Declaración</strong></p>
  <pre><code>
    funcion nombre() {
      instrucciones
    }
  </code></pre>
  <p><strong>Llamada</strong></p>
  <pre><code>
    nombre()    
  </code></pre>
  <p class="nota">
    Nota: Hay dos tipos de funciones, las que podemos crear nosotros mismos y las predefinidas, y podemos tener tantas funciones como necesitemos.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // declarar la funcion saludo
    function saludo(){
        console.log("hola, saludos")
    }
    
    // llamar a la funcion saludo
    saludo()
    saludo()
    saludo()        
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // declarar la funcion saludo
    function saludo(){
        echo("hola, saludos" . "\n");
    }
    
    // llamar a la funcion saludo
    saludo();
    saludo();
    saludo();                   
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # declarar la funcion saludo
    def saludo():
        print("hola, saludos")
    
    # llamar a la funcion saludo
    saludo()
    saludo()
    saludo()    
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // llamar a la funcion saludo
          saludo();
          saludo();
          saludo();
      }
      
      // declarar la funcion saludo
      static void saludo(){
          System.out.println("hola, saludos");
      }
    }  
  </code></pre>

</article>
    `
  },
  'Parámetros': {
    title: 'Parámetros',
    body: `
    <article class="entry-body">
  <p>
    Los parámetros son variables para recibir valores y usarlos dentro de las funciones. Cuando se define una función, se define típicamente junto con uno o más parámetros. Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos como argumentos y se ven normalmente de esta forma:
  </p>
  <p><strong>Declaración</strong></p>
  <pre><code>
    funcion nombre( param1 , param2, …) {
      instrucciones
    }
  </code></pre>
  <p><strong>Llamada</strong></p>
  <pre><code>
    nombre( arg1, arg2, … )
  </code></pre>

  <h5>JavaScript</h5>
  <pre><code>
    // declarar la funcion saludo
    function saludo( nombre ){
        console.log("hola ", nombre, " saludos")
    }
    
    // llamar a la funcion saludo
    saludo( 'juan' )
    saludo( 'ana' )
    saludo( 'luis' )
    saludo( 'sofia' )        
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // declarar la funcion saludo
    function saludo( $nombre ){
        echo("hola " . $nombre . " saludos" . "\n");
    }
    
    // llamar a la funcion saludo
    saludo( 'juan' );
    saludo( 'ana' );
    saludo( 'luis' );
    saludo( 'sofia' );                     
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # declarar la funcion saludo
    def saludo( nombre ):
        print("hola ", nombre, " saludos")
    
    # llamar a la funcion saludo
    saludo( 'juan' )
    saludo( 'ana' )
    saludo( 'luis' )
    saludo( 'sofia' )     
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // llamar a la funcion saludo
          saludo( "juan" );
          saludo( "ana" );
          saludo( "luis" );
          saludo( "sofia" );
      }
      
      // declarar la funcion saludo
      static void saludo( String nombre ){
          System.out.println("hola " + nombre + " saludos");
      }
    }  
  </code></pre>

</article>
    `
  },
  'Retorno': {
    title: 'Retorno',
    body: `
    <article class="entry-body">
  <p>
    Podemos usar las funciones para procesar información o ejecutar instrucciones, pero la mayoría del tiempo vamos a querer “devolver” algo, ya sea la información procesada o algún mensaje, para eso las funciones cuentan con una sentencia “return” para devolver lo que necesitemos de esa función y eso lo podemos almacenar o recibir en una variable, esto normalmente se vería así:
  </p>
  <p><strong>Declaración</strong></p>
  <pre><code>
    funcion nombre( param1 , param2, …) {
      instrucciones
      return mensaje  
    }
  </code></pre>
  <p><strong>Llamada</strong></p>
  <pre><code>
    variable = nombre( arg1, arg2, … )
  </code></pre>
  <p class="nota">
    Nota: cuando se ejecuta el return la función se detiene y la ejecución regresa al lugar donde se llamó la función, incluso si hay más código después del return.
  </p>

  <h5>JavaScript</h5>
  <pre><code>
    // declaracion de funciones
    function suma ( num1, num2 ){
        return num1 + num2
    }
    
    function resta ( num1, num2 ){
        return num1 - num2
    }
    
    // llamado de funciones
    console.log("el resultado de la suma es: ", suma( 12, 4 ) )
    console.log("el resultado de la resta es: ", resta( 12, 4 ))
  </code></pre>

  <h5>PHP</h5>
  <pre><code>
    &lt;?php
    // declaracion de funciones
    function suma ( $num1, $num2 ){
        return $num1 + $num2;
    }
    
    function resta ( $num1, $num2 ){
        return $num1 - $num2;
    }
    
    // llamado de funciones
    echo("el resultado de la suma es: ". suma( 12, 4 ) ."\n");
    echo("el resultado de la resta es: ". resta( 12, 4 ) ."\n");
  </code></pre>

  <h5>Python</h5>
  <pre><code>
    # declaracion de funciones
    def suma ( num1, num2 ):
        return num1 + num2
    
    def resta ( num1, num2 ):
        return num1 - num2
    
    # llamado de funciones
    print("el resultado de la suma es: ", suma( 12, 4 ) )
    print("el resultado de la resta es: ", resta( 12, 4 ))
  </code></pre>

  <h5>Java</h5>
  <pre><code>
    class Main {
      public static void main(String[] args) {
          
          // llamar a la funcion saludo
          System.out.println("el resultado de la suma es: " + suma( 12, 4 ) );
          System.out.println("el resultado de la suma es: " + resta( 12, 4 ) );
      }
      
      // declarar la funcion saludo
      static int suma( int num1, int num2 ){
          return num1 + num2;
      }
      
      static int resta( int num1, int num2 ){
          return num1 - num2;
      }
    }  
  </code></pre>

</article>
    `
  }
}

