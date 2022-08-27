import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CButton } from '@coreui/react';

function Card(prop) {
  return (
<>
<CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src="/images/react.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
</>
    )
}

export default Card