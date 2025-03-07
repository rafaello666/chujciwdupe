import React, { useState } from 'react';
import { submitTypingResult } from '../../services/api';

export default function TypingResultsPage() {
  const [lessonId, setLessonId] = useState<number>(1);
  const [wpm, setWpm] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitTypingResult(lessonId, wpm);
      alert('Wynik zapisany!');
    } catch (error) {
      console.error('Błąd zapisu wyniku:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Rejestracja wyników pisania</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Lesson ID:</label>
          <input
            type="number"
            value={lessonId}
            onChange={(e) => setLessonId(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Słowa na minutę (WPM):</label>
          <input
            type="number"
            value={wpm}
            onChange={(e) => setWpm(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Zapisz wynik</button>
      </form>
    </div>
  );
}
