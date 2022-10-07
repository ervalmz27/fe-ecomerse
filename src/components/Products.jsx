import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [dataProduct, setDataProduct] = useState();
  const params = {
    page: 1,
    limit: 5,
  };

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get("http://localhost:9222/v1/product", { params });
      setDataProduct(result.data.data.rows);
    };
    getProduct();
  }, []);

  return (
    <Container>
      {dataProduct?.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
