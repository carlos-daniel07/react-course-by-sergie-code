import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { UserContext } from "../context/UserContext";

const LoginScreen = () => {
  const initialForm = {
    name: "",
    tech: "",
    mail: "",
    media: "",
  };

  const { formState, onInputChange, name, tech, mail, media } =
    useForm(initialForm);
  const { setUser } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(formState);
  };
  return (
    <>
      <form
        className="container mt-5 mb-5 bg-dark p-5 rounded-3 text-light"
        onSubmit={onSubmit}
      >
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="tech" className="form-label">
            Tecnología
          </label>
          <input
            type="text"
            className="form-control"
            name="tech"
            value={tech}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="mail" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            name="mail"
            aria-describedby="emailHelp"
            value={mail}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="media" className="form-label">
            Redes Sociales
          </label>
          <input
            type="text"
            className="form-control"
            name="media"
            value={media}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar usuario
        </button>
      </form>
    </>
  );
};

export default LoginScreen;
