export const getStudents = () => {
  return fetch("http://localhost:3100/students").then((res) => res.json());
  
}
export const getStudentInfo = (id) => {
  return fetch(`http://localhost:3100/students/${id}`).then((res) => res.json());
  
}

export const getStudentMessages = (id) => {
  return fetch(`http://localhost:3100/messages/${id}`).then((res) => res.json());
}

export const getDressMakerMessages = (idStudent, idDressMaker) => {
  return fetch(`http://localhost:3100/messages/${idStudent}/${idDressMaker}`).then((res) => res.json());
}

export const sendMessages = ( idStudent, idDressMaker, userType, message) => {

  const url = "http://localhost:3100/messages";
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      studentId: idStudent,
      dressMakerId: idDressMaker,
      userType: userType,
      dateCreated: Date.now(),
      message: message,
    }),
  };

  return fetch(url, options).then((res) => res.json());

}