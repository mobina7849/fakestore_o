import React from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/card_list/CardList";
import Container from "../../components/container/Container";
import "./home.style.scss";

const Home = ({products}) => {
  return (
    <div className="Home">
      <Container>
        <CardList className="mt-1" title={"دسته بندی اول"} href="/categories/1">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی دوم"} href="/categories/2">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی سوم"} href="/categories/3">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </CardList>
      </Container>
    </div>
  );
};

export default Home;
