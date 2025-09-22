import React, { useEffect, useMemo, useState } from 'react';
import { Play, Clock, Code, BookOpen } from 'lucide-react';

interface LessonsListProps {
  onSelectLesson: (lessonId: number) => void;
  selectedLesson: number | null;
}

interface LessonDto {
  id: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  theory: string;
  exercise: string;
}

const LessonsList: React.FC<LessonsListProps> = ({ onSelectLesson, selectedLesson }) => {
  const [lessons, setLessons] = useState<LessonDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/api/lessons');
        if (!res.ok) throw new Error('Не удалось загрузить уроки');
        const data: LessonDto[] = await res.json();
        setLessons(data);
      } catch (e: any) {
        setError(e.message || 'Ошибка загрузки');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const selected = useMemo(() => lessons.find(l => l.id === selectedLesson) || null, [lessons, selectedLesson]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lessons List */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Уроки Java</h2>
          {loading && (
            <div className="text-gray-600">Загрузка уроков…</div>
          )}
          {error && (
            <div className="text-red-600">{error}</div>
          )}
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all duration-200 ${
                  selectedLesson === lesson.id
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                  <Play className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{lesson.duration}</span>
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {lesson.topics.length} тем
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selected.description}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Theory Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Конспект</span>
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                      {selected.theory}
                    </pre>
                  </div>
                </div>

                {/* Exercise Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Code className="h-5 w-5 text-green-600" />
                    <span>Задание</span>
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {selected.exercise}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Выберите урок</h3>
              <p className="text-gray-600">
                Выберите урок из списка слева, чтобы начать изучение
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonsList;