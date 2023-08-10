import styled from "styled-components";

const Wrapper = styled.section`
  background-color: white;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 79vw;
    margin: 0 auto;
    padding: 2rem 0;
    height: fit-content;
    margin-bottom: 100rem;
  }
  @media (max-width: 682px) {
  .dashboard-page{
    width: 80vw !important;
    padding-top: 11rem !important;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    /* align-items: center; */

  }
}
  @media (min-width: 1700px) and (max-width: 2400px){
    .dashboard-page{
      margin-left: 7vw;
      width: 91vw;
    }
  }
  @media (min-width: 2400px){
    .dashboard-page{
      margin-left: 16vw;
      width: 72vw;
    }
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    /* .dashboard-page {
      width: 80vw;
    } */
  }

  @media (max-width: 1700px) {
    .dashboard-page {
      width: 93vw;
      padding: 0rem 0rem;
    }
  }


`;
export default Wrapper;
