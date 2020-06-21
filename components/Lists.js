import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'

const Comments = ({ comments }) => {
  if (!Array.isArray(comments) || !comments.length) {
    return <Item>No comment, yet :(</Item>
  }
  return (
    <div>
      <CommentTitle> Users Comments </CommentTitle>
      {comments.map((comment, index) => (
        <Item key={index}>
          <div>
            <Name>{comment.name}</Name>
            <Date>{comment.date}</Date>
            <Email href={`mailto:${comment.email}`}>{comment.email}</Email>
          </div>
          <RatingWrapper>
            <Rating value={comment.rating} readOnly={true} />
          </RatingWrapper>
          <Comment>{comment.comment}</Comment>
        </Item>
      ))}
    </div>
  )
}

const CommentTitle = styled.h2`
  margin-bottom: 24px;
`

const Item = styled.div`
  background: #fbfbfb;
  border: 1px solid #eee;
  padding: 18px;
  border-radius: 6px;
  margin: 0 0 12px 10px;
  position: relative;

  &:before {
    position: absolute;
    top: 14px;
    left: -10px;
    display: inline-block;
    border-top: 10px solid transparent;
    border-right: 10px solid #fff;
    border-bottom: 10px solid transparent;
    border-right-color: #eee;
    content: '';
  }
`

const RatingWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 14px;
`

const Name = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin: 0 12px 0 0;
`

const Email = styled.a`
  display: block;
  font-size: 12px;
  color: #61b6e0;
  padding-bottom: 10px;
`
const Date = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #aaa;
`

const Comment = styled.p`
  font-size: 14px;
  background: #eee;
  border-radius: 8px;
  padding: 12px;
`

export default Comments
