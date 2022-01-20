import { FC } from 'react';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { grey } from '@mui/material/colors';
import './sidebar.scss';

const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <button className="sidebar__header_menu"><MenuTwoToneIcon sx={{ color: grey[500] }} fontSize='large'/></button>
        <input className="sidebar__header_search" placeholder='Search'/>
      </div>
      <ul className="sidebar__room_list">
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          Room 1
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=" alt="" />
          Room 2
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          Room 3
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://www.thespruce.com/thmb/EvdqR5HNV6Ev9RBv8qGqHNE8DoM=/3636x2045/smart/filters:no_upscale()/how-to-arrange-living-room-furniture-1976578-hero-c99074dcad854b669b91652046a39203.jpg" alt="" />
          Room 4
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-natasha-bardaran-9-1607305891.jpg" alt="" />
          Room 5
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://www.mydomaine.com/thmb/srr8tEBuETSi4omBepX50rgNJV0=/2500x3049/filters:no_upscale():max_bytes(150000):strip_icc()/DesignbyEmilyHendersonDesignandPhotobySaraLigorria-Tramp_654-b8122ec9f66b4c69a068859958d8db37.jpg" alt="" />
          Room 6
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg" alt="" />
          Room 7
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://media.istockphoto.com/photos/empty-minimalist-room-with-gray-wall-on-background-picture-id1129813604?k=20&m=1129813604&s=612x612&w=0&h=FrADrPmofSeBG1T0o5YefRviG_5fq0oDPZosUq84Ax0=" alt="" />
          Room 8
        </li>
        <li className="sidebar__room_list_item">
        <img className="sidebar__room_list_item_image" src="https://www.thespruce.com/thmb/9zdyLzPobCbaJrCfue4JR-xe6Ps=/2075x1167/smart/filters:no_upscale()/living-room-dos-and-donts-2213467-hero-da82a4643bc84d669a0a34f64e60beb1.jpg" alt="" />
          Room 9
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

