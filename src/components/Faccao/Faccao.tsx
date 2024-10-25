import ModalBox from './ModalBox';
import ray from '../../assets/icons/ray.svg';

const Available: AvailableActionsProps[] = 
  [
    {
      cp: '1CP',
      type: 'STR',
      icon: ray,
      title: 'RELENTLESS ASSAULT',
    }
  ]


const Faccao = () => {
  return (
    <div>
        <ModalBox tags={['ADEPTUS ASTARTE', 'IMPERIUM', 'STORM BRINGER', 'ASSAULT', 'ASSAULT SQUAD']}
        AvailableActions={Available}/>
    </div>
  )
}

export default Faccao;