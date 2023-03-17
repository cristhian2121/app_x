export const getStudents = () => {
  return fetch("http://localhost:3100/students").then((res) => res.json());
  
}