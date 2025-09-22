package com.example.java_oky;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/lessons")
public class LessonsController {

	@GetMapping
	public List<Lesson> getLessons() {
		List<Lesson> lessons = new ArrayList<>();

		lessons.add(new Lesson(
			1,
			"Введение в Java",
			"История языка, установка JDK, первая программа",
			"30 мин",
			new String[]{"История Java", "JDK и JRE", "Hello World"},
			"""
# Введение в Java

Java — это платформа и язык программирования, созданный с прицелом на переносимость, безопасность и масштабируемость. Основные концепции:

- JVM (Java Virtual Machine) выполняет байткод и обеспечивает переносимость.
- JDK (Java Development Kit) — комплект для разработки (javac, jar и т.д.).
- JRE (Java Runtime Environment) — среда выполнения.
- Сборщик мусора (Garbage Collector) управляет памятью автоматически.

Пример первой программы:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Привет, мир!");
    }
}
```

Советы по установке:
- Скачайте JDK (OpenJDK или Oracle JDK).
- Добавьте JAVA_HOME и путь к `bin` в PATH.
- Проверьте `java -version` и `javac -version`.
""",
			"""
 // Задание: выведите своё имя и любимый язык программирования
 public class MyFirstProgram {
     public static void main(String[] args) {
         // Ваш код здесь
     }
 }
 """
		));

		lessons.add(new Lesson(
			2,
			"Переменные и типы данных",
			"Примитивные типы, объявление переменных, операторы",
			"45 мин",
			new String[]{"byte..long, float..double", "char, boolean", "String и ссылочные типы"},
			"""
# Переменные и типы данных

Примитивы: `byte, short, int, long, float, double, char, boolean`.
`String` — ссылочный тип для текста.

Пример:

```java
int age = 25;
boolean isStudent = true;
String name = "Иван";
```

Операторы: арифметические (`+ - * / %`), сравнений (`==, !=, >, <`), логические (`&&, ||, !`).

Преобразование типов (casting) и автоматическое расширение (widening):

```java
int i = 100;
long l = i; // widening
double d = 3.14;
int j = (int) d; // narrowing — явное преобразование
```
""",
			"""
 // Задание: объявите переменные и выведите краткую анкету
 public class PersonInfo {
     public static void main(String[] args) {
         // Объявите имя, возраст, рост, студент ли
     }
 }
 """
		));

		lessons.add(new Lesson(
			3,
			"Условные операторы",
			"if-else, switch-case, тернарный оператор",
			"40 мин",
			new String[]{"if-else", "switch", "тернарный оператор (?:)"},
			"""
# Условные операторы

`if/else` для ветвления, `switch` для выбора по значению, тернарный оператор для компактных выражений.

Пример `if`:

```java
int score = 85;
if (score >= 90) {
    System.out.println("Отлично");
} else if (score >= 75) {
    System.out.println("Хорошо");
} else {
    System.out.println("Нужно подтянуться");
}
```

Пример `switch` (Java 14+ имеет упрощённый синтаксис):

```java
int day = 3;
switch (day) {
    case 1 -> System.out.println("Понедельник");
    case 2 -> System.out.println("Вторник");
    default -> System.out.println("Другое");
}
```
""",
			"""
 // Задание: по баллам score выведите текст оценки
 public class GradeCalculator {
     public static void main(String[] args) {
         int score = 85;
         // ваш код
     }
 }
 """
		));

		lessons.add(new Lesson(
			4,
			"Циклы и массивы",
			"for, while, do-while, foreach, одномерные и многомерные массивы",
			"50 мин",
			new String[]{"for, while, do-while", "for-each", "Массивы и их обход"},
			"""
# Циклы и массивы

Циклы позволяют повторять код. Основные виды:

- `for` — классический счётный цикл.
- `while` — цикл с предусловием.
- `do-while` — цикл с постусловием.
- `for-each` (enhanced for) — удобен для перебора коллекций и массивов.

Примеры:

```java
// for
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// while
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// for-each
int[] nums = {1, 2, 3};
for (int n : nums) {
    System.out.println(n);
}

// двумерный массив
int[][] matrix = {{1,2,3},{4,5,6}};
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        System.out.println(matrix[r][c]);
    }
}
```

Советы по отладке: печатайте индексы, проверяйте границы массива (IndexOutOfBoundsException).
""",
			"""
 // Задание: найдите максимум и сумму массива
 public class ArrayTasks {
     public static void main(String[] args) {
         int[] arr = {3, 7, 2, 9, 4};
         // посчитайте сумму и найдите максимум
     }
 }
 """
		));

		lessons.add(new Lesson(
			5,
			"Классы, объекты и ООП",
			"Классы, конструкторы, инкапсуляция, наследование, полиморфизм",
			"60 мин",
			new String[]{"Класс/объект", "Конструкторы", "Наследование и интерфейсы"},
			"""
# Классы, объекты и ООП

Объектно-ориентированное программирование — ядро Java. Основные принципы:

- **Инкапсуляция** — сокрытие данных и доступ через методы (get/set).
- **Наследование** — класс может расширять другой (`extends`).
- **Полиморфизм** — объекты разных классов обрабатываются через общий тип.
- **Абстракция** — выделение интерфейсов и абстрактных классов.

Пример класса:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public void sayHello() {
        System.out.println("Привет, я " + name);
    }
}
```

Наследование:

```java
public class Student extends Person {
    private String university;
    public Student(String name, int age, String university) {
        super(name, age);
        this.university = university;
    }
}
```
""",
			"""
 // Задание: реализуйте класс BankAccount с методами deposit, withdraw и getBalance
 public class BankAccount {
     // поля и конструктор
     // методы deposit(double), withdraw(double), getBalance()
 }
 """
		));

		lessons.add(new Lesson(
			6,
			"Коллекции и Generics",
			"List, Set, Map, Iterator, Generics, базовый ввод в Stream API",
			"55 мин",
			new String[]{"ArrayList, LinkedList", "HashSet, TreeSet", "HashMap, Map"},
			"""
# Коллекции и Generics

Java Collections Framework предоставляет готовые структуры данных:

- `List` (упорядоченный, допускает дубликаты) — `ArrayList`, `LinkedList`.
- `Set` (уникальные элементы) — `HashSet`, `TreeSet`.
- `Map` (пары ключ-значение) — `HashMap`, `TreeMap`.

Generics позволяют параметризовать типы: `List<String>`, `Map<String, Integer>`.

Пример использования:

```java
List<String> names = new ArrayList<>();
names.add("Аня");
for (String n : names) {
    System.out.println(n);
}

Map<String, Integer> ages = new HashMap<>();
ages.put("Иван", 20);
System.out.println(ages.get("Иван"));
```

Коротко о Stream API (введение):

```java
int sum = List.of(1,2,3,4).stream()
    .filter(x -> x % 2 == 0)
    .mapToInt(Integer::intValue)
    .sum();
```
""",
			"""
 // Задание: даны список студентов (имя, балл) — отсортируйте их по убыванию и выведите топ-3
 public class CollectionTasks {
     public static void main(String[] args) {
         // используйте List, Comparator и/или Stream API
     }
 }
 """
		));

		lessons.add(new Lesson(
			7,
			"Исключения, ввод-вывод и работа с файлами",
			"try/catch, try-with-resources, File I/O, сериализация (введение)",
			"60 мин",
			new String[]{"Исключения", "try-with-resources", "Files API"},
			"""
# Исключения, ввод-вывод и работа с файлами

Исключения помогают обрабатывать ошибки: `try`, `catch`, `finally`.

```java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Деление на ноль");
} finally {
    System.out.println("Этот блок выполнится в любом случае");
}
```

Try-with-resources для автоматического закрытия потоков:

```java
try (java.io.BufferedReader br = java.nio.file.Files.newBufferedReader(java.nio.file.Path.of("input.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (java.io.IOException e) {
    e.printStackTrace();
}
```

Работа с файлами через `java.nio.file.Files` и `Path` — современный и удобный способ.
""",
			"""
 // Задание: прочитайте числа из файла numbers.txt (по одному в строке) и выведите их сумму
 public class FileSum {
     public static void main(String[] args) {
         // реализуйте чтение и суммирование с обработкой исключений
     }
 }
 """
		));
		lessons.add(new Lesson(
			8,
			"Статические члены и модификаторы доступа",
			"static поля и методы, public/private/protected, final",
			"45 мин",
			new String[]{"static поля", "static методы", "модификаторы доступа"},
			"""
# Статические члены и модификаторы доступа

- `static` — принадлежит классу, а не объекту.
- Модификаторы доступа: `public`, `private`, `protected`, package-private.
- `final` — запрещает изменение значения (для переменных), наследование (для классов), переопределение (для методов).

Пример:

```java
public class MathUtils {
    public static final double PI = 3.1415;

    public static int square(int x) {
        return x * x;
    }
}

int area = MathUtils.square(5);
System.out.println(MathUtils.PI);
```
""",
			"""
 // Задание: создайте класс Constants с константой APP_NAME и статическим методом printInfo()
 public class Constants {
     // объявите static final поле
     // реализуйте метод printInfo()
 }
 """
		));

		lessons.add(new Lesson(
			9,
			"Интерфейсы и абстрактные классы",
			"Различия интерфейсов и абстрактных классов, implements/extends",
			"55 мин",
			new String[]{"interface", "abstract class", "implements vs extends"},
			"""
# Интерфейсы и абстрактные классы

- `interface` определяет контракт (методы без реализации, начиная с Java 8 — default методы).
- `abstract class` может содержать и реализованные методы, и абстрактные.
- Класс может реализовывать несколько интерфейсов, но наследовать только один класс.

Пример интерфейса:

```java
public interface Drawable {
    void draw();
}

public class Circle implements Drawable {
    public void draw() {
        System.out.println("Рисуем круг");
    }
}
```

Пример абстрактного класса:

```java
public abstract class Shape {
    abstract double area();
}

public class Rectangle extends Shape {
    private int w, h;
    public Rectangle(int w, int h) { this.w = w; this.h = h; }
    @Override double area() { return w * h; }
}
```
""",
			"""
 // Задание: создайте интерфейс Animal с методом sound(), реализуйте его в Dog и Cat
 public class InterfaceDemo {
     public static void main(String[] args) {
         // создайте объекты Dog и Cat и вызовите sound()
     }
 }
 """
		));

		lessons.add(new Lesson(
			10,
			"Пакеты и организация проекта",
			"Пакеты, import, структура каталогов, доступность классов",
			"40 мин",
			new String[]{"package", "import", "структура проекта"},
			"""
# Пакеты и организация проекта

Пакеты группируют классы и помогают избежать конфликтов имён.

- Объявление пакета: `package com.example.myapp;`
- Импорт классов: `import java.util.List;`
- Структура каталогов должна соответствовать пакету.

Пример:

```java
package utils;

public class StringUtils {
    public static boolean isEmpty(String s) {
        return s == null || s.isEmpty();
    }
}
```

Использование в другом пакете:

```java
import utils.StringUtils;

public class Main {
    public static void main(String[] args) {
        System.out.println(StringUtils.isEmpty(""));
    }
}
```
""",
			"""
 // Задание: создайте пакет helpers, в нём класс MathHelper с методом factorial(int n)
 // вызовите метод в классе Main из другого пакета
 """
		));

		return lessons;
	}
}
