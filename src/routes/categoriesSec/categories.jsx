import styled from "styled-components";

export const Container = styled.section`
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
    height: 25vh;
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

    h1{
      word-wrap: break-word;
      width: 250px;
    }
  }

  .card-right {
    flex-grow: 1;
    height: 40vh;
    display: flex;
    flex-direction: column;
  }

  .big-image {
    height: 70vh;
  }

  p {
    text-decoration: underline;
    width: max-content;
    padding-top: 20px;
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
      height: 40vh;
    }

    .main-container-right {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px 0;

      h1, p{
        padding-left: 20px;
      }
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
