export const COURSE_PROGRESS_EVENT = "course:progress";

const storageKey = (courseId: string) => `course-progress:${courseId}`;

export function getCompleted(courseId: string): Set<string> {
  try {
    const raw = localStorage.getItem(storageKey(courseId));
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function save(courseId: string, completed: Set<string>) {
  try {
    localStorage.setItem(storageKey(courseId), JSON.stringify([...completed]));
  } catch {
    // Private mode or storage disabled: progress just won't persist.
  }
  document.dispatchEvent(new CustomEvent(COURSE_PROGRESS_EVENT, { detail: { courseId } }));
}

export function markComplete(courseId: string, lessonId: string) {
  const completed = getCompleted(courseId);
  if (completed.has(lessonId)) return;
  completed.add(lessonId);
  save(courseId, completed);
}

export function resetProgress(courseId: string) {
  save(courseId, new Set());
}

export function onProgress(courseId: string, callback: () => void) {
  const handler = (event: Event) => {
    if ((event as CustomEvent<{ courseId: string }>).detail?.courseId === courseId) callback();
  };
  document.addEventListener(COURSE_PROGRESS_EVENT, handler);
  return () => document.removeEventListener(COURSE_PROGRESS_EVENT, handler);
}
