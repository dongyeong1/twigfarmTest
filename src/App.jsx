import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoFilter } from "react-icons/io5";
import { useEffect, useState } from "react";
import { newLetterPageOne, newLetterPageTwo } from "./API/data";
import Modal from "react-modal";

const Wrapper = styled.div`
    border: 1px solid gray;

    width: 100%;
    max-width: 640px;
`;

const HeaderWrapper = styled.div`
    position: relative;
    white-space: pre-wrap;
    width: 100%;
    max-width: 640px;
    background-color: white;
    height: 120px;
    color: black;
    // border: 1px solid black;
    svg {
        width: 21px;
        height: 21px;
    }
`;

const GreenColor = styled.span`
    color: #14a653;
`;
const TextWrapper = styled.div`
    position: absolute;
    left: 16px;
    top: 12px;

    width: 89px;
    height: 96px;

    text-align: left;
    font-weigth: 400;
    font-size: 24px;
    line-height: 32px;
    font-size: "Audiowide";
`;
const SearchIconWrapper = styled.div`
    position: absolute;
    right: 56px;
    top: 12px;
    width: 32px;
    height: 32px;
`;
const HamburgerIconWrapper = styled.div`
    position: absolute;
    right: 16px;
    top: 12px;
    width: 32px;
    height: 32px;
`;
const FilterIconWrapper = styled.div`
    position: absolute;
    right: 16px;
    top: 74px;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;
const ContentWrapper = styled.div`
    width: 100%;
    max-width: 640px;
`;

const DateWrapper = styled.div`
    // border-top: 2px solid gray;
    border-bottom: 3px solid gray;
    width: 100%;
    max-width: 640px;
    height: 32px;
    background-color: #14a653;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        padding: 0 16px 0 16px;
    }
`;

const BoxWrapper = styled.div`
    border-bottom: 1px solid gray;
    position: relative;
    width: 100%;
    max-width: 640px;
    height: 128px;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;

    ${({ isRead }) =>
        isRead &&
        `
    background-color:lightgray;

    `}
`;

const Title = styled.div`
    // position: absolute;
    // top: 16px;
    // left: 16px;
    width: 240px;
    height: auto;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
`;
const LeftWrapper = styled.div`
    margin-top: 16px;
    margin-left: 16px;
`;
const ImageWrapper = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 64px;
    height: 64px;
`;

const FromName = styled.div`
    // position: absolute;
    // top: 92px;
    // left: 16px;
    width: auto;
    height: 16px;
    font-size: 10px;
    line-height: 16px;
    color: #262626;
    text-align: left;
`;
const Time = styled.div`
    // position: absolute;
    // top: 64px;
    // left: 16px;
    width: 120px;
    height: 15px;
    color: #575757;
    line-height: 16px;
    font-size: 10px;
    text-align: left;
`;
const ModalTitleWrapper = styled.div`
    width: 328px;
    height: 64px;
    background-color: #f4f4f4;
    font-size: 20px;
`;
const ModalTitle = styled.div`
    width: 146px;
    heigth: 32px;
    padding-top: 20px;
    padding-left: 24px;
`;

const ModalContent = styled.div`
    color: #575757;
    width: 280px;
    height: 24px;
    margin-top: 16px;
    margin-left: 24px;
`;
const ModalSelectWrapper = styled.div``;
const ModalButtonWrapper = styled.div``;
const CancelButton = styled.button`
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: 136px;
    height: 48px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 14px;
    text-align: center;
    background-color: #8d8d8d;
    cursor: pointer;
`;
const OkButton = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 136px;
    height: 48px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 14px;
    text-align: center;
    background-color: #14a653;
`;
const Footer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 640px;
    height: 48px;
    background-color: #4f4f59;
    color: white;
    font-size: 14px;
    display: flex;
`;

const LeftContent = styled.div`
    max-width: 320px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const RightContent = styled.div`
    max-width: 320px;
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
`;
function App() {
    const customStyles = {
        content: {
            position: "relative",
            padding: "0px",
            borderRadius: "20px",
            width: "328px",
            height: "450px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(newLetterPageOne.contents);
    const [twoDate, setTwoDate] = useState(newLetterPageTwo.contents);
    const [selectValue, setSelectValue] = useState("");
    const [filter, setFilter] = useState(false);
    const [okValue, setOkValue] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onScroll = () => {
        if (
            window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 300
        ) {
            setVisible(true);
        }
    };
    const FilterModalShow = () => {
        setModalVisible(true);
        setOkValue(false);
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    const changeValue = (e) => {
        setSelectValue(e.target.value);
    };
    const ModalOk = () => {
        if (selectValue !== "All") {
            setFilter(true);
            setOkValue(true);
        }
        setModalVisible(false);
    };
    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <Wrapper className="App">
            <Modal
                ariaHideApp={false}
                isOpen={modalVisible}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <>
                    <ModalTitleWrapper>
                        <ModalTitle>맞춤 목록 만들기</ModalTitle>
                    </ModalTitleWrapper>
                    <ModalContent>어떤 뉴스레터를 보시겠어요?</ModalContent>
                    <ModalSelectWrapper onChange={changeValue}>
                        <input type="radio" value="false" name="categories" />{" "}
                        아직 읽지 않음
                        <input
                            type="radio"
                            value="true"
                            name="categories"
                        />{" "}
                        이미 읽음
                        <input
                            type="radio"
                            value="All"
                            name="categories"
                        />{" "}
                        전체
                    </ModalSelectWrapper>
                    <ModalButtonWrapper>
                        <CancelButton onClick={closeModal}>취소</CancelButton>
                        <OkButton onClick={ModalOk}>적용</OkButton>
                    </ModalButtonWrapper>
                </>
            </Modal>
            <HeaderWrapper>
                <TextWrapper>
                    <span>이번주</span>
                    <br />
                    <span>전체</span>
                    <br />
                    <GreenColor>뉴스레터</GreenColor>
                </TextWrapper>
                <SearchIconWrapper>
                    <FaSearch />
                </SearchIconWrapper>
                <HamburgerIconWrapper>
                    <RxHamburgerMenu />
                </HamburgerIconWrapper>
                <FilterIconWrapper>
                    <IoFilter onClick={FilterModalShow} />
                </FilterIconWrapper>
            </HeaderWrapper>
            <ContentWrapper>
                {date.map((v) => (
                    <>
                        <DateWrapper>
                            <div>{v._id}</div>
                            <div>{v.docs.length}</div>
                        </DateWrapper>
                        <>
                            {filter && okValue
                                ? v.docs.map((v) => {
                                      if (
                                          v.isRead ==
                                          (selectValue == "true" ? true : false)
                                      ) {
                                          return (
                                              <BoxWrapper isRead={v.isRead}>
                                                  <LeftWrapper>
                                                      <Title>{v.subject}</Title>
                                                      <Time>
                                                          {new Date(v.createdAt)
                                                              .toLocaleString()
                                                              .substring(
                                                                  13,
                                                                  21
                                                              )}
                                                      </Time>
                                                      <FromName>
                                                          {v.fromName}
                                                      </FromName>
                                                  </LeftWrapper>
                                                  <ImageWrapper>
                                                      <img
                                                          width={64}
                                                          height={64}
                                                          src={v.thumbnails}
                                                          alt=""
                                                      />
                                                  </ImageWrapper>
                                              </BoxWrapper>
                                          );
                                      }
                                  })
                                : v.docs.map((v) => (
                                      <>
                                          <BoxWrapper isRead={v.isRead}>
                                              <LeftWrapper>
                                                  <Title>{v.subject}</Title>
                                                  <Time>
                                                      {new Date(v.createdAt)
                                                          .toLocaleString()
                                                          .substring(13, 21)}
                                                  </Time>
                                                  <FromName>
                                                      {v.fromName}
                                                  </FromName>
                                              </LeftWrapper>
                                              <ImageWrapper>
                                                  <img
                                                      width={64}
                                                      height={64}
                                                      src={v.thumbnails}
                                                      alt=""
                                                  />
                                              </ImageWrapper>
                                          </BoxWrapper>
                                      </>
                                  ))}
                        </>
                    </>
                ))}
            </ContentWrapper>
            {visible && (
                <ContentWrapper>
                    {twoDate.map((v) => (
                        <>
                            <DateWrapper>
                                <div>{v._id}</div>
                                <div>{v.docs.length}</div>
                            </DateWrapper>
                            <>
                                {filter && okValue
                                    ? v.docs.map((v) => {
                                          if (
                                              v.isRead ==
                                              (selectValue == "true"
                                                  ? true
                                                  : false)
                                          ) {
                                              return (
                                                  <BoxWrapper isRead={v.isRead}>
                                                      <LeftWrapper>
                                                          <Title>
                                                              {v.subject}
                                                          </Title>
                                                          <Time>
                                                              {new Date(
                                                                  v.createdAt
                                                              )
                                                                  .toLocaleString()
                                                                  .substring(
                                                                      13,
                                                                      21
                                                                  )}
                                                          </Time>
                                                          <FromName>
                                                              {v.fromName}
                                                          </FromName>
                                                      </LeftWrapper>
                                                      <ImageWrapper>
                                                          <img
                                                              width={64}
                                                              height={64}
                                                              src={v.thumbnails}
                                                              alt=""
                                                          />
                                                      </ImageWrapper>
                                                  </BoxWrapper>
                                              );
                                          }
                                      })
                                    : v.docs.map((v) => (
                                          <>
                                              <BoxWrapper isRead={v.isRead}>
                                                  <LeftWrapper>
                                                      <Title>{v.subject}</Title>
                                                      <Time>
                                                          {new Date(v.createdAt)
                                                              .toLocaleString()
                                                              .substring(
                                                                  13,
                                                                  21
                                                              )}
                                                      </Time>
                                                      <FromName>
                                                          {v.fromName}
                                                      </FromName>
                                                  </LeftWrapper>
                                                  <ImageWrapper>
                                                      <img
                                                          width={64}
                                                          height={64}
                                                          src={v.thumbnails}
                                                          alt=""
                                                      />
                                                  </ImageWrapper>
                                              </BoxWrapper>
                                          </>
                                      ))}
                            </>
                        </>
                    ))}
                </ContentWrapper>
            )}
            <Footer>
                <LeftContent>모두 읽음</LeftContent>
                <RightContent>구독 관리</RightContent>
            </Footer>
        </Wrapper>
    );
}

export default App;
