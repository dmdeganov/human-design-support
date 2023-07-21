'use client';
import React, {useEffect} from 'react';
import useModal from '@/hooks/useModal';
import Modal from '@/app/_layout-components/modal';
import OutlinedButton from '@/app/_layout-components/modal/OutlinedButton';
import GradientButton from '@/app/_layout-components/modal/GradientButton';
import {layoutStyles} from '@/app/_layout-components/styles';
import {setCookie} from 'cookies-next';

interface Props {
  areCookiesAllowed: boolean;
}

const CookiesModal = ({areCookiesAllowed}: Props) => {
  const {isOpen, open, close} = useModal();

  useEffect(() => {
    if (!areCookiesAllowed) {
      setTimeout(open, 500)
    }
  }, [areCookiesAllowed]);

  const onAllowCookies = () => {
    setCookie('cookies_enabled', true, {expires: new Date(9999, 12)});
    setCookie('font-weightiness', document.documentElement.dataset['font_weightiness'], {expires: new Date(9999, 12)});
    close();
  };

  return (
    <Modal isOpen={isOpen} close={close} className={layoutStyles['cookies-modal']}>
      <div className={layoutStyles['cookies-modal__content']}>
        <p className={layoutStyles['cookies-modal__message']}>
          We use third-party <a href="#">cookies</a> in order to personalize your site experience
        </p>
        <div className={layoutStyles['cookies-modal__buttons']}>
          <OutlinedButton onClick={close}>Decline</OutlinedButton>
          <GradientButton onClick={onAllowCookies}>Allow</GradientButton>
        </div>
      </div>
    </Modal>
  );
};

export default CookiesModal;
