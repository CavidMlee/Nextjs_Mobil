import { Modal as ReactModal } from 'react-responsive-modal';
import styled from '@emotion/styled';

interface IProps {
    open: boolean;
    onCloseModal?: () => void | null;
    children: React.ReactNode
}

export const Modal: React.FC<IProps> = ({ open, onCloseModal = () => { }, children }) => {
    return (
        <ReactModal open={open} onClose={onCloseModal} closeIcon=' ' center styles={{ modal: { padding: 0,borderRadius:12 } }}>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ReactModal>
    )
}

type Props = {
    theme?: any;
  }

const ModalContainer = styled.div<Props>`
    padding:30px 30px 40px;
    border-radius: 10px;
    background-color:${props => props.theme.colors.modalBackground}
`