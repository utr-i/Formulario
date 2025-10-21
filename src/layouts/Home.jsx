import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <h2>Mi Home</h2>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
        <Button onClick={() => navigate("/tarjeta")} label="Ir al formulario" />
        <Button onClick={() => navigate("/personas")} label="Ver total de personas" />
      </div>
    </Fragment>
  );
};

export default Home;
