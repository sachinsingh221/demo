import styled from 'styled-components';
import WithDirection from './rtl';

const categoryStyle = styled.div`

.category-layout {
    scrollbar-width: none;
    height: 100vh;
    overflow-x: scroll;
    .ant-card-cover img{
        width: 50%;
    }
    .ant-card-meta-description {
        white-space: pre-line;
      }
  }
`;

export default WithDirection(categoryStyle);
