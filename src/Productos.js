import React, { useState, useEffect } from 'react';
import './Productos.css';
import banner1 from './imagenes/Banner/banner1.png';
import banner2 from './imagenes/Banner/banner2.png';
import banner3 from './imagenes/Banner/banner3.png';
import vestir1 from './imagenes/VESTIR/h1.jpg';
import vestir2 from './imagenes/VESTIR/h2.jpg';
import vestir3 from './imagenes/VESTIR/h3.jpeg';
import vestir4 from './imagenes/VESTIR/m1.jpg';
import vestir5 from './imagenes/VESTIR/m2.jpg';
import vestir6 from './imagenes/VESTIR/m3.jpeg';
import casual1 from './imagenes/CASUAL/h1.jpeg';
import casual2 from './imagenes/CASUAL/h2.jpeg';
import casual3 from './imagenes/CASUAL/h3.jpeg';
import casual4 from './imagenes/CASUAL/m1.jpeg';
import casual5 from './imagenes/CASUAL/m2.jpeg';
import casual6 from './imagenes/CASUAL/m3.jpg';
import deportivo1 from './imagenes/DEPORTIVO/h1.jpg';
import deportivo2 from './imagenes/DEPORTIVO/h2.jpg';
import deportivo3 from './imagenes/DEPORTIVO/h3.jpeg';
import deportivo4 from './imagenes/DEPORTIVO/m1.jpeg';
import deportivo5 from './imagenes/DEPORTIVO/m2.jpeg';
import deportivo6 from './imagenes/DEPORTIVO/m3.jpeg';

const Productos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [largoPie, setLargoPie] = useState('');
  const [anchoPie, setAnchoPie] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [piePlano, setPiePlano] = useState('');
  const [ortopedico, setOrtopedico] = useState('');
  const [errors, setErrors] = useState({});
  
  const slides = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!nombre) newErrors.nombre = 'El nombre es obligatorio';
    if (!documento) newErrors.documento = 'El documento es obligatorio';
    if (!largoPie) newErrors.largoPie = 'El largo del pie es obligatorio';
    if (!anchoPie) newErrors.anchoPie = 'El ancho del pie es obligatorio';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(`Formulario enviado por: ${nombre}`);
      setModalVisible(false);
    }
  };

  return (
    <div>
      <div id="banner">
        <div className="slide">
          <img src={slides[currentSlide]} alt="Banner" className="img" />
        </div>
      </div>
      <h1>VESTIR</h1>
      <section id="estilos">
        {[vestir1, vestir2, vestir3, vestir4, vestir5, vestir6].map((img, index) => (
          <div key={index}>
            <img src={img} alt={`VS #50${index + 1}`} />
            <h4>{`VS #50${index + 1}`}</h4>
            <p>S/. {360 - index * 10}.00</p>
            <label id="detalles" onClick={openModal}>Agregar Detalles</label>
          </div>
        ))}
      </section>
      <h1>CASUAL</h1>
      <section id="estilos">
        {[casual1, casual2, casual3, casual4, casual5, casual6].map((img, index) => (
          <div key={index}>
            <img src={img} alt={`CS #50${index + 1}`} />
            <h4>{`CS #50${index + 1}`}</h4>
            <p>S/. {330 - index * 10}.00</p>
            <label id="detalles" onClick={openModal}>Agregar Detalles</label>
          </div>
        ))}
      </section>
      <h1>DEPORTIVO</h1>
      <section id="estilos">
        {[deportivo1, deportivo2, deportivo3, deportivo4, deportivo5, deportivo6].map((img, index) => (
          <div key={index}>
            <img src={img} alt={`DP #50${index + 1}`} />
            <h4>{`DP #50${index + 1}`}</h4>
            <p>S/. {380 - index * 10}.00</p>
            <label id="detalles" onClick={openModal}>Agregar Detalles</label>
          </div>
        ))}
      </section>
      {modalVisible && (
        <div className="container-modal">
          <div className="content-modal">
            <h2 className="form-title">Personaliza tu calzado</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <label htmlFor="Nombre">Nombre completo:</label>
                <input
                  type="text"
                  id="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese Nombre"
                />
                {errors.nombre && <p className="error">{errors.nombre}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="Documento">Documento de Identidad:</label>
                <input
                  type="text"
                  id="Documento"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  placeholder="Ingresar Documento"
                />
                {errors.documento && <p className="error">{errors.documento}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="LargoPie">Largo del pie (desde el talón hasta el dedo más grande):</label>
                <input
                  type="text"
                  id="LargoPie"
                  value={largoPie}
                  onChange={(e) => setLargoPie(e.target.value)}
                  placeholder="Ingresar medida del largo del pie"
                />
                {errors.largoPie && <p className="error">{errors.largoPie}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="Modelos">Modelos disponibles:</label>
                <select id="Modelos">
                  <option value=""></option>
                  <option value="501">VS #501</option>
                  <option value="502">VS #502</option>
                  <option value="503">VS #503</option>
                  <option value="504">VS #504</option>
                  <option value="505">VS #505</option>
                  <option value="506">VS #506</option>
                  <option value="507">CS #501</option>
                  <option value="508">CS #502</option>
                  <option value="509">CS #503</option>
                  <option value="510">CS #504</option>
                  <option value="511">CS #505</option>
                  <option value="512">CS #506</option>
                  <option value="513">DP #501</option>
                  <option value="514">DP #502</option>
                  <option value="515">DP #503</option>
                  <option value="516">DP #504</option>
                  <option value="517">DP #505</option>
                  <option value="518">DP #506</option>
                </select>
              </div>
              <div className="input-box">
                <label htmlFor="AnchoPie">Ancho del pie:</label>
                <input
                  type="text"
                  id="AnchoPie"
                  value={anchoPie}
                  onChange={(e) => setAnchoPie(e.target.value)}
                  placeholder="Ingresar ancho del pie"
                />
                {errors.anchoPie && <p className="error">{errors.anchoPie}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="Enfermedades">Padece usted de alguna de estas enfermedades:</label>
                <input
                  type="text"
                  id="Enfermedades"
                  value={enfermedades}
                  onChange={(e) => setEnfermedades(e.target.value)}
                  placeholder="Ingresar enfermedades"
                />
              </div>
              <div className="input-box">
                <label htmlFor="PiePlano">Pie plano:</label>
                <input
                  type="text"
                  id="PiePlano"
                  value={piePlano}
                  onChange={(e) => setPiePlano(e.target.value)}
                  placeholder="Ingresar si tiene pie plano"
                />
              </div>
              <div className="input-box">
                <label htmlFor="Ortopedico">Utiliza calzado ortopédico:</label>
                <input
                  type="text"
                  id="Ortopedico"
                  value={ortopedico}
                  onChange={(e) => setOrtopedico(e.target.value)}
                  placeholder="Ingresar si utiliza calzado ortopédico"
                />
              </div>
              <div className="btn-group">
                <button type="submit">Enviar</button>
                <button type="button" onClick={closeModal}>Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
