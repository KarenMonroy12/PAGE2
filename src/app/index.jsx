import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Product from '../components/Product';

const Home = () => {
  useEffect(() => {
    import('jquery').then(($) => {
      import('slick-carousel').then(() => {
        // Inicializar el carrusel u otros plugins de jQuery aquí
        $('.carousel').slick();
      });
    });
  }, []);

  return (
    <Layout>
      <Banner />
      <div className="contenedor">
        <div className="banner">
          <Category id="snacks" imgSrc="https://eldiariony.com/wp-content/uploads/sites/2/2021/10/Snacks-Estados-Unidos.jpg?w=1200" alt="Snacks" title="Snacks" />
          <Category id="cold_desserts" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXwyFN0uslVW93a6ROTsjJEVzDeMM0OMmV5qTvEZHpA&s" alt="Postres Fríos" title="Postres Fríos" />
          <Category id="sweets" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmyhoEWCFdzbWGMXKePXmHgsflI-kKd0K9tJ1zr-Ncw&s" alt="Dulces" title="Dulces" />
          <Category id="school_supplies" imgSrc="https://enfoquenoticias.com.mx/wp-content/uploads/2023/07/utiles.jpg" alt="Productos Escolares" title="Productos Escolares" />
        </div>
        <div className="slider carousel">
          <Product
            imgSrc="https://tiendaenlinea.richs.com.mx/pub/media/catalog/product/cache/9410609cc633bd0384bd8733146e5e28/g/l/glasscake_pay_de_lim_n.jpg"
            alt="Pay de limón"
            imgHoverSrc="https://peopleenespanol.com/thmb/xOGmRafJ5cUFFqc9r5M2oVurpWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ec86f4f2-b512-4b55-a9ff-ca1e79e61f17-c741c77bcd9848d7a0a702d24220c13f.jpg"
            category="Postres"
            title="Pay de limón frío"
            description="¡No te quedes sin probarlo!"
            oldPrice="$40.00"
            newPrice="$35.00"
          />
          <Product
            imgSrc="https://digaar.com/admin_digaar/productos/141.jpg"
            alt="Papas Fritas tipo chips"
            imgHoverSrc="https://i.pinimg.com/originals/09/c2/fc/09c2fce96e9651d3e40a4a5b81c7942b.jpg"
            category="Snacks"
            title="Papas Fritas tipo chips"
            description="¡Super crujientes y al mejor precio!"
            oldPrice="$35.00"
            newPrice="$25.00"
          />
          <Product
            imgSrc="https://i.pinimg.com/originals/1a/d2/82/1ad282615353e642bb29af79f281c447.jpg"
            alt="Gomitas Enchiladas"
            imgHoverSrc="https://i.pinimg.com/originals/e6/2d/b2/e62db2dc0278bce9ea3ec0cf2c2eb9f6.jpg"
            category="Dulces"
            title="Gomitas Enchiladas"
            description="¡Si pruebas una no vas a parar!"
            oldPrice="$22.00"
            newPrice="$18.00"
          />
          <Product
            imgSrc="https://www.kokoeurope.pl/cdn/shop/files/ezgif.com-webp-to-jpg_6.jpg?v=1686668913"
            alt="PicaFresas"
            imgHoverSrc="https://i.blogs.es/675f93/como-hacer-picafresas-de-forma-natural/1366_2000.jpg"
            category="Dulces"
            title="PicaFresas"
            description="¡Al mejor precio de toda la ESTL!"
            oldPrice="$10.00 c/u"
            newPrice="$7.50 c/u"
          />
          <Product
            imgSrc="https://fantasiasmiguel.com/cdn/shop/products/proyectoml2732_395x.jpg?v=1602487303"
            alt="Fruta Fresca de temporada"
            imgHoverSrc="https://d2j6dbq0eux0bg.cloudfront.net/images/24817164/1812655064.jpg"
            category="Snacks"
            title="Fruta Fresca de temporada"
            description="¡Deliciosa y fresca!"
            oldPrice="$35.00"
            newPrice="$25.00"
          />
          <Product
            imgSrc="https://imgv2-1-f.scribdassets.com/img/document/561154480/original/6622d92145/1711605762?v=1"
            alt="Libro Make it real A2.2"
            imgHoverSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejMtsv2SR2orZM6TOSraEmTqpWlKpCAfzHqUa4g9PJA&s"
            category="Productos escolares"
            title="Libro Make it real A2.2"
            description="Libro de inglés profesional A2.2 en buenas condiciones"
            oldPrice="$189.00"
            newPrice="$140.00"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;