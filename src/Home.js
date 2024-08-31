import React, { useState, useEffect } from 'react';
import './Home.css';
import banner1 from './imagenes/Banner/banner1.png';
import banner2 from './imagenes/Banner/banner2.png';
import banner3 from './imagenes/Banner/banner3.png';
import lacoste from './imagenes/Logos/LACOSTE.jpg';
import nike from './imagenes/Logos/Nike.jpg';
import vizzano from './imagenes/Logos/Vizzano.jpg';

const Home = () => {
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [largoPie, setLargoPie] = useState('');
  const [anchoPie, setAnchoPie] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [piePlano, setPiePlano] = useState('');
  const [ortopedico, setOrtopedico] = useState('');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [banners.length]);

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

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <section id="banner">
        <div className="banner">
          <img src={banners[currentBanner]} alt="Banner" />
        </div>
      </section>

      <section id="banner-info">
        <div className="contenido-banner">
          <h3>EL BUEN PIE: ZAPATERIA DE ALTA CALIDAD <br /> 100% CUERO</h3>
          <button onClick={openModal} className="boton-personalizar">
            Personaliza tu calzado
          </button>
        </div>
      </section>

      <section id="proveedores">
        <div className="brand-container">
          <div className="brand-item">
            <div className="image-container">
              <img src={lacoste} alt="Lacoste" className="brand-image" />
              <div className="description">
                Lacoste fue y sigue siendo una marca original, que nace a partir del año 1923...
              </div>
            </div>
            <p className="brand-name">Lacoste</p>
            <a href="https://www.lacoste.com/es/" target="_blank" rel="noopener noreferrer" className="leer-mas">
              Leer más
            </a>
          </div>

          <div className="brand-item">
            <div className="image-container">
              <img src={nike} alt="Nike" className="brand-image" />
              <div className="description">
                Nike se remonta a la década de los 50's, cuando el entrenador de atletismo...
              </div>
            </div>
            <p className="brand-name">Nike</p>
            <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="leer-mas">
              Leer más
            </a>
          </div>

          <div className="brand-item">
            <div className="image-container">
              <img src={vizzano} alt="Vizzano" className="brand-image" />
              <div className="description">
                Vizzano calzado brasilero, que resalta por su estilo y la sofisticación de mujeres...
              </div>
            </div>
            <p className="brand-name">Vizzano</p>
            <a href="https://viale.pe/marca/vizzano-29" target="_blank" rel="noopener noreferrer" className="leer-mas">
              Leer más
            </a>
          </div>
        </div>
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
    </>
  );
};

export default Home;
