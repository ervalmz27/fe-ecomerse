import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import FormDialog from "../components/Dialog";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Cart = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState();
  const [dialog, setDialog] = useState(false);
  const [email, setEmail] = useState("");
  let location = useLocation();

  useEffect(() => {
    console.log("location", location.state.item);
    setItem(location.state.item);
  }, [location]);
  const handleDialogOpen = () => {
    setDialog(true);
  };
  const handleClose = () => {
    setDialog(false);
  };

  const handleApi = async () => {
    const body = {
      product: item?.name,
      size: item?.size,
      price: item?.price * count,
      email: email,
      total: count,
    };
    const result = await axios.post("http://localhost:9222/v1/product/checkout", body);
    alert("chekout berhasil silahkan cek Email anda!");
    handleClose();
    return result;
  };

  return (
    <Container>
      <Navbar />
      <FormDialog
        open={dialog}
        handleClose={handleClose}
        handleApi={handleApi}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton
            type="filled"
            onClick={() => {
              handleDialogOpen();
            }}
          >
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={`http://localhost:9222/path/${item?.image}`} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item?.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item?.id}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> {item?.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon />
                  </Button>

                  <ProductAmount>{count}</ProductAmount>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                </ProductAmountContainer>
                <ProductPrice>Rp.{item?.price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rp{item?.price * count}</SummaryItemPrice>
            </SummaryItem>
            <Button
              onClick={() => {
                handleDialogOpen();
              }}
            >
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
