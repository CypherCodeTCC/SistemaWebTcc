import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  min-height: 60vh;

  display: flex;
  justify-content: center;
  gap: 0 10px;
  padding: 20px;

  font-family: Arial, Helvetica, sans-serif;

  animation: container-animation 1.9s;

  .book-image {
    object-fit: contain;
    width: 100%;
    height: 250px;
  }

  .card {
    padding: 20px;
    border-radius: 8px;
    background-image: linear-gradient(to top, #f2f0f1 20%, #f2f0f1 100%);
  }

  .main-container-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }

  .card-left {
    height: 85vh;
  }

  .card-right {
    flex-grow: 1;
    height: 40vh;
  }

  .big-image {
    height: 650px;
  }

  p {
    text-decoration: underline;
    width: max-content;
  }

  .card:hover {
    cursor: pointer;
    background-image: linear-gradient(to top, #cecbcc 20%, #bdbabc 100%);
  }

  p:hover {
    font-weight: bold;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 10px 0;

    .card {
      padding: 10px;
    }

    .book-image {
      width: 100%;
    }

    .big-image {
      height: 450px;
    }

    .main-container-right {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px 0;
    }

    .card-left {
      height: 65vh;
      max-width: 100%;
      padding: 20px;
    }
  }

  @keyframes container-animation {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
  }
`;
