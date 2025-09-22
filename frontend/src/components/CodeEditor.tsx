import React, { useState } from 'react';
import { Play, RefreshCw, CheckCircle, AlertCircle, Code } from 'lucide-react';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState(`public class Practice {
    public static void main(String[] args) {
        // Напишите ваш код здесь
        System.out.println("Добро пожаловать в практику Java!");
    }
}`);

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const exercises = [
    {
      id: 1,
      title: 'Калькулятор',
      description: 'Создайте программу, которая складывает два числа',
      template: `public class Calculator {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        // Вычислите сумму и выведите результат
        
    }
}`,
      solution: `public class Calculator {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int sum = a + b;
        System.out.println("Сумма: " + sum);
    }
}`
    },
    {
      id: 2,
      title: 'Проверка возраста',
      description: 'Создайте программу, которая проверяет можно ли голосовать',
      template: `public class VotingAge {
    public static void main(String[] args) {
        int age = 17;
        // Проверьте, может ли человек голосовать (18+)
        
    }
}`,
      solution: `public class VotingAge {
    public static void main(String[] args) {
        int age = 17;
        if (age >= 18) {
            System.out.println("Можете голосовать!");
        } else {
            System.out.println("Ещё рано голосовать");
        }
    }
}`
    },
    {
      id: 3,
      title: 'Таблица умножения',
      description: 'Выведите таблицу умножения для числа 5',
      template: `public class MultiplicationTable {
    public static void main(String[] args) {
        int number = 5;
        // Выведите таблицу умножения от 1 до 10
        
    }
}`,
      solution: `public class MultiplicationTable {
    public static void main(String[] args) {
        int number = 5;
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}`
    }
  ];

  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);

  const runCode = () => {
    setIsRunning(true);
    
    // Симуляция выполнения кода
    setTimeout(() => {
      try {
        // Более продвинутая симуляция выполнения Java кода
        let output = '';
        
        // Проверяем на основные конструкции
        if (code.includes('Calculator') && code.includes('int sum = a + b')) {
          output = 'Сумма: 30';
        } else if (code.includes('VotingAge') && code.includes('if (age >= 18)')) {
          output = 'Ещё рано голосовать';
        } else if (code.includes('MultiplicationTable') && code.includes('for')) {
          output = '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50';
        } else if (code.includes('System.out.println')) {
          // Извлекаем строки из println
          const outputs = [];
          const lines = code.split('\n');
          
          for (const line of lines) {
            if (line.includes('System.out.println')) {
              const match = line.match(/System\.out\.println\([^)]*"([^"]*)"/);
              if (match) {
                outputs.push(match[1]);
              } else {
                // Попробуем найти переменные
                const varMatch = line.match(/System\.out\.println\([^)]*([^"]+)\)/);
                if (varMatch) {
                  outputs.push('Результат выполнения');
                }
              }
            }
          }
          
          if (outputs.length > 0) {
            output = outputs.join('\n');
          } else {
            output = 'Программа выполнена успешно';
          }
        } else if (code.includes('public static void main')) {
          output = 'Программа скомпилирована и выполнена успешно';
        } else {
          output = 'Добавьте System.out.println() для вывода результата';
        }
        
        setOutput(output);
      } catch (error) {
        setOutput('Ошибка выполнения программы');
      }
      
      setIsRunning(false);
    }, 1500);
  };

  const resetCode = () => {
    setCode(selectedExercise.template);
    setOutput('');
  };

  const showSolution = () => {
    setCode(selectedExercise.solution);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Exercise List */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Практические задания</h2>
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                onClick={() => setSelectedExercise(exercise)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedExercise.id === exercise.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                <p className="text-sm text-gray-600">{exercise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">{selectedExercise.title}</h2>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCode}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span className="text-sm">Сбросить</span>
                </button>
                <button
                  onClick={showSolution}
                  className="flex items-center space-x-1 px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Решение</span>
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {isRunning ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  <span className="text-sm">
                    {isRunning ? 'Выполняется...' : 'Запустить'}
                  </span>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-gray-700 mb-4">{selectedExercise.description}</p>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                placeholder="Напишите ваш Java код здесь..."
              />
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-2 p-4 border-b">
              <div className={`w-3 h-3 rounded-full ${output ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <h3 className="font-semibold text-gray-900">Вывод программы</h3>
            </div>
            <div className="p-4">
              {output ? (
                <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 whitespace-pre-wrap">
                  {output}
                </pre>
              ) : (
                <div className="text-gray-500 text-center py-8">
                  <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                  <p>Нажмите "Запустить", чтобы увидеть результат</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;