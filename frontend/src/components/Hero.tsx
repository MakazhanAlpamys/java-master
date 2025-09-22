import React from 'react';
import { Play, ArrowRight, Code, BookOpen } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Изучайте <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Java</span> легко и эффективно
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Бесплатные реальные конспекты и практические задания. Без регистрации, без сохранения прогресса — просто открывайте и учитесь.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Начать обучение</span>
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Посмотреть примеры</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Структурированные уроки</h3>
            <p className="text-gray-600">
              Пошаговое изучение Java от основ до продвинутых тем. Каждый урок содержит понятный конспект и примеры.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Практические задания</h3>
            <p className="text-gray-600">
              Пишите и запускайте примеры у себя. Задания подобраны так, чтобы закреплять материал.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Без регистрации</h3>
            <p className="text-gray-600">
              Никаких аккаунтов и уведомлений. Просто открывайте сайт и изучайте Java.
            </p>
          </div>
        </div>

        {/* Code Preview */}
        <div className="mt-20">
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">HelloWorld.java</span>
            </div>
            <pre className="text-green-400 text-sm md:text-base">
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Добро пожаловать в JavaMaster!");
        System.out.println("Начните своё путешествие в мир Java");
    }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;