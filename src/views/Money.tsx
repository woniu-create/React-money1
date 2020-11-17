import Layout from '../components/Layout'
import styled from "styled-components";
import React from 'react'
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout=styled(Layout)`
  display:flex;
  flex-direction:column;
`
function Money() {
    return (
         <MyLayout>
           <TagsSection/>
           <NotesSection/>
           <CategorySection/>
           <NumberPadSection>
           </NumberPadSection>
        </MyLayout>
    )
  }
  export default Money