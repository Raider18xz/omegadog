import React, { useState } from 'react';
import './home.css';
import { MdOutlinePets } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';

function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [show, setShow] = useState(false);

    const categories = {
        "Comida": [
            { name: "Rocku carne", image: "https://aratiendas.com/wp-content/uploads/2021/07/3059-7704269101807-1.jpg" },
            { name: "Dali carne", image: "https://aratiendas.com/wp-content/uploads/2021/07/15094-7704269115330-1.jpg" },
            { name: "Vatigrano", image: "https://exitocol.vtexassets.com/arquivos/ids/23541084/Paquete-Alimento-Para-Aves-5933_a.jpg?v=638562349606770000" }

        ],
        "Juguetes": [
            { name: "Pelota para Perros", image: "https://m.media-amazon.com/images/I/615xsFxAxLL._AC_SL1200_.jpg" },
            { name: "Ratón de Juguete", image: "https://dcdn.mitiendanube.com/stores/001/049/402/products/juguete-gato-ratoncitos-peluche1-c48bb96fc0140565cf16286499019974-640-0.jpg" },
            { name: "Centro de actividades", image: "https://www.juguetesparamismascotas.com/images/juguetes/pajaros/foto_primera/centro-de-actividades-siribro_pr.webp" }

        ],
        "Ropa": [
            { name: "Capa para Perros", image: "https://i5.walmartimages.com/asr/3e4116ab-fc21-4f93-8094-99cab8341413.d7189df8ca6a259953faca475fbb64c0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" },
            { name: "Suéter para Gatos", image: "https://m.media-amazon.com/images/I/71olZLTFruL.jpg" },
            { name: "Suéter de Rana", image: "https://ae01.alicdn.com/kf/H008b5fea635340bba7187f8196b0e1d98/Ropa-de-invierno-para-aves-abrigo-c-lido-con-capucha-para-loros-periquito-cacat-a-Disfraces.jpg" }

        ],
        "Salud": [
            { name: "NexGard", image: "https://ecommerce.micorral.com/backend/admin/backend/web/archivosDelCliente/items/images/20210104162847-Perros-Cuidado-y-salud-para-perros-NEXGARD-SPECTRA-S-35-75K-CAJA-X-1TAB-718202101041628478370.png" },
            { name: "Advocate", image: "https://www.agrocampo.com.co/media/catalog/product/cache/c49bee17ef1a166135589f0329fd61b1/5/1/5151251215121170027-v2-min.jpg" },
            { name: "Maíz Vitamíco", image: "https://laboratorioszoo.com.co/wp-content/uploads/2022/03/MAIX-VITAMINICO-PRODUCTO.jpg" }
        ],
        "Higiene": [
            { name: "Chunky", image: "https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/1/1/111101208_ed-min.jpg" },
            { name: "Dentalife", image: "https://www.purina.es/sites/default/files/2021-11/7613036724135_1%20front%20pack_0.jpg" },
            { name: "Banho", image: "https://www.acuariosuy.com/wp-content/uploads/2020/06/banho-xl.jpg" }

        ],
        "Accesorios": [
            { name: "Correas", image: "https://m.media-amazon.com/images/I/61b6XnOd+UL._AC_UF1000,1000_QL80_.jpg" },
            { name: "Collares", image: "https://bestmascota.com/cdn/shop/products/61lpbtQ-lwL._AC_SL1001_980x.jpg?v=1607358478" },
            { name: "Collares", image: "https://m.media-amazon.com/images/I/71tnWLwpTYL.jpg" }

        ]
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>   
         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">OmegaShop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={'/login'}>Inicio Sesión</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Registro</a>
                    </li>
                </ul>
                <span className="navbar-text" onClick={handleShow}>
                    <FaCartArrowDown size={50} />
                </span>
            </div>
        </div>
    </nav>

    {/* Modal para iniciar sesión o registrarse */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Iniciar Sesión o Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Para continuar, por favor inicia sesión o regístrate.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={() => {
                window.location.href = '/login'; // Redirigir a la página de inicio de sesión
            }}>
                Iniciar/Registrarse
            </Button>
        </Modal.Footer>
    </Modal>
   
        <div className="c mt-5">
                <h1 className=" text-center"><MdOutlinePets />Bienvenido a OmegaShop<MdOutlinePets /></h1>

                {/* Carrusel de Ofertas de Pelos */}
                <div className="offers-section mt-4 p-4 text-center text-white">
                    <h2 class="text-dark">Ofertas de Pelos</h2>
                    <div id="carouselOffers" className="carousel slide w-100" data-bs-ride="carousel">
                        <div className="carousel-inner border border-dark border-2 rounded-3">
                            <div className="carousel-item active">
                                
                                <img src="https://exiagricola.net/tienda/wp-content/uploads/2019/07/Banner-Descuentos.png" className="d-block w-100 " alt=" " />
                                <div className="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://huellasdelvalle.cl/wp-content/uploads/elementor/thumbs/%C2%A1Descubre-las-ofertas-exclusivas-por-el-mes-del-gato-HASTA-UN-25-DE-DESCUENTO--qse7som907gwisafazuxxi4vyqlfxxkkme5jyipks0.jpg" className="d-block w-100" alt="O" />
                                <div className="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.mascotasavila.com/cdn/shop/files/portada-promoysorteo.png?v=1704367945&width=3840" className="d-block w-100" alt="Oferta 3" />
                                <div className="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselOffers" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselOffers" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Carrusel de Categorías */}
                <div className="categories mt-5">
                    <h2 className="text-center">Categorías</h2>
                    <div id="carouselCategories" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className="text-center mx-2">
                                        <img src="https://img.freepik.com/vector-gratis/bolsas-mascotas-set-comida_24877-51205.jpg" className="d-block w-100 border border-dark border-2" alt="Comida" onClick={() => handleCategoryClick("Comida")} />
                                        <p>Comida</p>
                                    </div>
                                    <div className="text-center mx-2">
                                        <img src="https://i.pinimg.com/564x/db/a3/33/dba3331b5476d6f73a9d786428edf245.jpg" className="d-block w-100 border border-dark border-2" alt="Juguetes" onClick={() => handleCategoryClick("Juguetes")} />
                                        <p>Juguetes</p>
                                    </div>
                                    <div className="text-center mx-2">
                                        <img src="https://st2.depositphotos.com/19232680/46594/v/450/depositphotos_465941462-stock-illustration-sweater-dog-clothes-icon-cartoon.jpg" className="d-block w-100 border border-dark border-2" alt="Ropa" onClick={() => handleCategoryClick("Ropa")} />
                                        <p>Ropa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="text-center mx-2">
                                        <img src="https://i.pinimg.com/736x/60/32/9d/60329de760872f42320cf1969f887cea.jpg" className="d-block w-100 border border-dark border-2" alt="Salud" onClick={() => handleCategoryClick("Salud")} />
                                        <p>Salud</p>
                                    </div>
                                    <div className="text-center mx-2">
                                        <img src="https://st5.depositphotos.com/35057912/67015/v/450/depositphotos_670157652-stock-illustration-grooming-vector-fill-outline-icon.jpg" className="d-block w-100 border border-dark border-2" alt="Higiene" onClick={() => handleCategoryClick("Higiene")} />
                                        <p>Higiene</p>
                                    </div>
                                    <div className="text-center mx-2">
                                        <img src="https://img.freepik.com/vector-gratis/collar-flotante-mascotas-dibujos-animados-vector-icono-ilustracion-animal-objeto-icono-concepto-aislado-premium_138676-4759.jpg" className="d-block w-100 border border-dark border-2" alt="Accesorios" onClick={() => handleCategoryClick("Accesorios")} />
                                        <p>Accesorios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategories" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselCategories" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                {/* Sección de productos */}
                <div className="products mt-5">
                    <h2 className="text-center text-white">{selectedCategory ? `Productos en ${selectedCategory}` : "Selecciona una categoría"}</h2>
                    <div className="row">
                        {selectedCategory && categories[selectedCategory].map((product, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-5 border border-dark border-2">
                                    <img src={product.image} className="card-img-top " alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div></>
    );
}

export default Home;
