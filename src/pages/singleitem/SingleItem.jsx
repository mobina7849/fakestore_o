import React from "react";
//import image from "../../assets/images/controller.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../../components/container/Container";
import "./singleitem.style.scss";
const SingleItem = ({ products }) => {
  const [single, setSingle] = useState({});
  const { descrptionID } = useParams();
  useEffect(() => {
    setSingle(products.filter((item) => item.id === Number(descrptionID))[0]);
  }, []);
  //console.log(single)
  const nav2=useNavigate()
  const handleNav2=()=>{
    nav2('/')
  }
  return (
    <Container>
      <div className="descrption">
        <div className="descrptionBack"  onClick={handleNav2}>&nbsp;برگشت به صفحه قبل</div>
        <div className="descrptionContent">
          <div className="descrptionImage">
            <picture>
              <img src={single.image} className="descrptionImg" alt="" />
            </picture>
            <div className="price">
                <div>
                    قیمت
                    <input type="text" />
                </div>
                <div>{single.price}تومان</div>
            </div>
            <div className="descrptionBtn">
              <button className="cartBtn">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="descrptionP">
            <h3>دسته بندی</h3>
            <h3>{single.name}</h3>
            <h3>توضیحات کوتاه در صورت نیاز</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleItem;
