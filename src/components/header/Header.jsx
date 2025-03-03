import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4 border-b-1'>
            <p className='font-bold text-2xl'>This is knowdge cafe website</p>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;