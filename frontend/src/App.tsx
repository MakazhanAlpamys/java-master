import React, { useState } from 'react';
import { BookOpen, Code, Trophy, User, Menu, X, Play, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import LessonsList from './components/LessonsList';
import CodeEditor from './components/CodeEditor';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'lessons' | 'practice'>('home');
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const renderContent = () => {
    switch (currentView) {
      case 'lessons':
        return <LessonsList onSelectLesson={setSelectedLesson} selectedLesson={selectedLesson} />;
      case 'practice':
        return <CodeEditor />;
      default:
        return <Hero onGetStarted={() => setCurrentView('lessons')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="pt-16">
        {renderContent()}
      </main>
      {/* Footer removed */}
    </div>
  );
}

export default App;