import { Modal as ReactModal } from 'react-responsive-modal';
import styled from '@emotion/styled';

interface IProps {
    isOpen: boolean;
    onCloseModal?: ()=>void;
    children: React.ReactNode
}

export const Modal: React.FC<IProps> = ({ isOpen, children, onCloseModal=()=>{} }) => {

    return (
        <ReactModal open={isOpen} onClose={onCloseModal} closeIcon center styles={{ modal: { padding: 0,borderRadius:14 } }}>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ReactModal>
    )
}

type TProps = {
    theme?: any;
  }

const ModalContainer = styled.div<TProps>`
    padding:30px 30px 40px;
    border-radius: 10px;
    background-color:${props => props.theme.colors.modalBackground}
`