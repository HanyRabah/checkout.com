import { useState } from 'react'
import styled from 'styled-components'
import Lists from '../components/Lists'
import CommentForm from '../components/Form'
import Modal from '../components/Modal'

const Home = () => {
  const [listData, setListData] = useState([])

  const submitComment = (comment) => {
    setListData([comment, ...listData])
  }

  return (
    <Container>
      <CommentSection>
        <CommentArtwork />
        <CommentFormWrapper>
          <CommentForm submitComment={submitComment} />
        </CommentFormWrapper>
      </CommentSection>
      {listData.length > 0 && (
        <CommentsListWrapper>
          <TrendModal ratings={listData} />
          <Lists comments={listData} />
        </CommentsListWrapper>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 20px 0;
  background: linear-gradient(225deg, #ffc63f, #fd3358 49%, #bc35d8);
  min-height: 100vh;
`

const CommentSection = styled.div`
  background: white;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1000px;
  margin: 0 auto 24px;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  min-height: 600px;
`
const CommentFormWrapper = styled.div`
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const CommentArtwork = styled.div`
  width: 40%;
  background: url(/formArtwork.jpg) no-repeat center / contain #f3d083;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const CommentsListWrapper = styled.div`
  background: white;
  width: 90%;
  max-width: 1000px;
  margin: 0px auto;
  display: block;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
`
const TrendModal = styled(Modal)`
  position: absolute;
  right: 15px;
  top: 15px;
`

export default Home
