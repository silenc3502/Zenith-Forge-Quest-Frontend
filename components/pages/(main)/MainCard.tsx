'use client'

import Link from 'next/link'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Avatar, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { Flexbox } from '@/components/common/FlexBox/FlexBox'
import StyledMainCard from './MainCard.style'
import Chip from '@/components/common/Chip/Chip'
import SquareIconBtn from '@/components/common/SquareIconBtn/SquareIconBtn'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import Tooltip from '@/components/common/Tooltip/Tooltip'
import { M_Main } from '@/types/model/main'
import useCategoryToColor from '@/hooks/useCategoryToColor'

function MainCard({ title, category, content, imageSrc, author, minute, hour }: M_Main.I_MainData) {
  const categoryToColor = useCategoryToColor()

  return (
    <StyledMainCard>
      <div className="card-top">
        <CardMedia sx={{ height: 200 }} image={imageSrc} title="green iguana" />
      </div>
      <CardContent className="card-contents">
        <div className="card category">
          <Chip href="/" size="small" label={category} color={categoryToColor(category as any) as any} />
        </div>
        <div className="card title">
          <Link className="anchor-under" href="/">
            {title}
          </Link>
        </div>

        <div className="card contents">
          <Link className="anchor-under" href="/">
            {content}
          </Link>
        </div>

        <Flexbox justifyContent="inherit">
          <Avatar>
            <InsertEmoticonIcon fontSize="small" />
          </Avatar>
          <Typography>{author}</Typography>
        </Flexbox>
      </CardContent>

      <CardContent className="card-footer">
        <Flexbox justifyContent="space-between">
          <Flexbox className="card-time" justifyContent="inherit">
            <AccessTimeIcon fontSize="small" />
            <div className="minute">{minute}</div>
            <div className="">|</div>
            <div className="hours">{hour}</div>
          </Flexbox>

          <Flexbox className="card-icon">
            <Tooltip title="댓글">
              <SquareIconBtn className="chat-icon" aria-label="chat">
                <ChatBubbleOutlineIcon />
              </SquareIconBtn>
            </Tooltip>
            <Tooltip title="공유하기">
              <SquareIconBtn className="share-icon" aria-label="share">
                <ShareIcon />
              </SquareIconBtn>
            </Tooltip>
            <Tooltip title="스크랩">
              <SquareIconBtn className="bookmark-icon" aria-label="share">
                <BookmarkBorderIcon />
              </SquareIconBtn>
            </Tooltip>
          </Flexbox>
        </Flexbox>
      </CardContent>
    </StyledMainCard>
  )
}

export default MainCard
