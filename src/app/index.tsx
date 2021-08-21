import * as React from 'react';
import styles from './index.scss';
import classNames from 'classnames';
import videoStart from '../../static/start.mp4';
import videoMain from '../../static/main_bg.mp4';
import imageLoading from '../../static/loading.gif';
import imageMain1 from '../../static/main-1.png';
import imageMain2 from '../../static/main-2.png';
import imageMain3 from '../../static/main-3.png';
import imageMainBg from '../../static/main_bg.png';

export function App(): JSX.Element {
  const [loading1, setLoading1] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);

  const ref1 = React.useRef<HTMLVideoElement>();
  const [status1, setStatus1] = React.useState(0);
  const handleLoad1 = React.useCallback(async () => {
    setLoading1(false);
  }, []);
  React.useEffect(() => {
    if (!loading1 && !loading2 && status1 === 0) {
      setStatus1(1);
      ref1.current.play();
    }
  }, [loading1, loading2, status1]);
  const handleEnd1 = React.useCallback(() => {
    setStatus1(2);
    ref2.current.play();
  }, []);

  const ref2 = React.useRef<HTMLVideoElement>();
  const handleLoad2 = React.useCallback(async () => {
    setLoading2(false);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.content}>
          <span>
            本网页仅供交流学习使用，视频、图片等资源归版权方所有，
            <a href="https://www.bilibili.com/blackboard/activity-yellowVSgreen7th.html">原始网页链接</a>
          </span>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={classNames(styles.loadingContainer, loading1 || loading2 || styles.hide)}
          style={{ backgroundImage: `url(${imageLoading})` }}
        />

        <video
          className={classNames(styles.videoStart, (loading1 || status1 === 2) && styles.hide)}
          muted
          preload="auto"
          ref={ref1}
          onLoadedData={handleLoad1}
          onEnded={handleEnd1}
        >
          <source src={videoStart} type="video/mp4" />
        </video>

        <video
          className={classNames(styles.videoMain, status1 === 2 || styles.hide)}
          muted
          preload="auto"
          loop
          ref={ref2}
          onLoadedData={handleLoad2}
        >
          <source src={videoMain} type="video/mp4" />
        </video>

        {loading2 || <Main visible={status1 === 2} />}
      </div>
    </div>
  );
}

function Main(props: { visible: boolean }): JSX.Element {
  const { visible } = props;
  const [page, setPage] = React.useState(1);
  return (
    <>
      <MainPage1 handover={() => setPage(2)} visible={visible && page === 1} />
      <MainPage2 handover={() => setPage(1)} visible={visible && page === 2} />
    </>
  );
}

function MainPage1(props: { handover: () => void; visible: boolean }): JSX.Element {
  const { handover, visible } = props;
  const scrollRef = React.useRef<HTMLDivElement>();
  const handleScroll = React.useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) handover();
  }, []);

  return (
    <div className={classNames(styles.main1, visible || styles.hide)} ref={scrollRef} onWheel={handleScroll}>
      <img src={imageMain1} className={styles.img1} alt="act-detail" />
      <img src={imageMain2} className={styles.img2} alt="arrow" onClick={handover} />
    </div>
  );
}

function MainPage2(props: { handover: () => void; visible: boolean }): JSX.Element {
  const { handover, visible } = props;
  const scrollRef = React.useRef<HTMLDivElement>();
  const handleScroll = React.useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0 && scrollRef.current.scrollTop + e.deltaY < 0) {
      scrollRef.current.scrollTo({ top: 0 });
      handover();
    }
  }, []);
  React.useEffect(() => {
    scrollRef.current.scrollTo({ top: 0 });
  }, [visible]);
  return (
    <div
      className={classNames(styles.main2, visible || styles.hide)}
      ref={scrollRef}
      onWheel={handleScroll}
      style={{ backgroundImage: `url("${imageMainBg}")` }}
    >
      <div className={styles.main2body}>
        <img src={imageMain3} alt="活动奖励列表" />
        <div style={{ height: '1000px', backgroundColor: 'white' }}>
          <p>假装我是评论列表</p>
        </div>
      </div>
    </div>
  );
}
