const STORAGE_KEY = "firststep.resume.v1";

export function loadResume(fallback) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

export function saveResume(resume) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    return true;
  } catch {
    return false;
  }
}

export function clearResume() {
  localStorage.removeItem(STORAGE_KEY);
}