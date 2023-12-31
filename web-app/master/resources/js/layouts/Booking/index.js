import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import * as action from 'store/actions'
import { can } from 'utils/casl/ability-context'
import Warehouse from 'assets/warehouse-solid.svg'
import UserService from 'services/UserService'

import { Layout, Menu, Tooltip, Button, Dropdown, Drawer, Descriptions, Typography, Input, Space, Form, message, notification } from 'antd'
import Icon, { MessageOutlined ,MenuUnfoldOutlined, MenuFoldOutlined, TeamOutlined, LogoutOutlined, HomeOutlined, ArrowLeftOutlined, FileTextOutlined, BookOutlined, LikeOutlined, DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
const { Content, Header, Sider } = Layout;


function BookingLayout(props) {

    const [collapsed, setCollapsed] = React.useState(true);
    const [collapsedWidth, setCollapsedWidth] = React.useState(80);
    const [myAccountDrawerVisible, setmyAccountDrawerVisible] = React.useState(false);  

    const [selectedMenu, setselectedMenu] = React.useState(null);

    const [changePasswordForm] = Form.useForm();

    const [changePasswordQuery, {isLoading: changePasswordQueryIsLoading, error: changePasswordQueryError}] = UserService.changePassword();

    React.useEffect( () => {

        // console.log(props.location.pathname)

        switch (props.location.pathname) {
            case '/booking/settings':
                setselectedMenu('/booking/settings');
                break;
            case '/booking/dashboard':
                setselectedMenu('/booking/dashboard');
                break;
            case '/booking/guests':
                setselectedMenu('/booking/guests');
                break;
            case '/booking/tripping':
                    setselectedMenu('/booking/tripping');
                break;

            case '/booking/inventory':
            case '/booking/inventory/products':
            case '/booking/inventory/packages':
                setselectedMenu('/booking/inventory');
                break;

            case '/booking/reports':
                setselectedMenu('/booking/reports');
                break;

            default:
                setselectedMenu('/booking');
        }

    }, []);

    // Handle sign out
    const handleSignOut = () => {
        
        props.dispatch(action.authLogout());

    }

    const changePasswordFormOnFinish = (values) => {
        console.log(values);

        changePasswordQuery(values, {
            onSuccess: (res) => {
                console.log(res);

                notification.success({
                    message: `Change password success`,
                    description:
                        ``,
                });

                changePasswordForm.resetFields();
            },
            onError: (e) => {
                console.log(e);
                message.info(e.message);
            }
        })
    }
        
    return (
        <Layout style={{height: '100vh'}} hasSider>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="lg"
                collapsedWidth={collapsedWidth}
                onBreakpoint={broken => {
                    if (broken) { setCollapsedWidth(0);
                    } else { setCollapsedWidth(80); }
                }}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: collapsedWidth == 0 ? 'inherit' :'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                  }}
                className="py-5"
            >
                <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column', height: '100%'}}>
                    <div className="logo" style={{textAlign: 'center', color: 'white'}}>
                        <BookOutlined />
                        <div>Booking</div>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['/booking']}
                        selectedKeys={[selectedMenu]}
                    >
                        <Menu.Item key="/" icon={<ArrowLeftOutlined />}>
                            <NavLink to="/">Back to Main</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/dashboard" icon={<DashboardOutlined />}>
                            <NavLink to="/booking/dashboard">Dashboard</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking" icon={<HomeOutlined />}>
                            <NavLink to="/booking">Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/tripping" icon={<LikeOutlined />}>
                            <NavLink to="/booking/tripping">Tripping</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/guests" icon={<TeamOutlined />}>
                            <NavLink to="/booking/guests">Guests</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/inventory" icon={<Icon component={Warehouse} />}>
                            <NavLink to="/booking/inventory">Inventory</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/reports" icon={<FileTextOutlined />}>
                            <NavLink to="/booking/reports">Reports</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/sms" icon={<MessageOutlined />}>
                            <NavLink to="/booking/sms">Sms Notification</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/booking/settings" icon={<SettingOutlined />}>
                            <NavLink to="/booking/settings">Settings</NavLink>
                        </Menu.Item>
                    </Menu>
                    <Dropdown placement="topLeft" overlay={
                        <Menu style={{overflow:'hidden'}}>
                            <Menu.Item icon={<LogoutOutlined />} onClick={handleSignOut}>
                                Sign out
                            </Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item icon={<UserOutlined />} onClick={()=>setmyAccountDrawerVisible(true)}>
                                My account ({props.user.first_name})
                            </Menu.Item>
                        </Menu>
                    }>
                        <Button shape="circle" type="primary" icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </Sider>
            <Drawer
                placement="left"
                visible={myAccountDrawerVisible}
                onClose={()=>setmyAccountDrawerVisible(false)}
                title="My account"
                width="500"
            >
                <Descriptions column={2} bordered size="small">
                    <Descriptions.Item label="First name">{props.user.first_name}</Descriptions.Item>
                    <Descriptions.Item label="Last name">{props.user.last_name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{props.user.email}</Descriptions.Item>
                </Descriptions>
                <div className="my-4">
                    <Typography.Text strong>Change password</Typography.Text>

                    <Form layout="vertical" form={changePasswordForm}
                            onFinish={changePasswordFormOnFinish}
                        >
                        <Space>
                        <Form.Item label="Old password" name="old_password" rules={[{required: true}, {min: 6}]}>
                            <Input placeholder="Old password" type="password" />
                        </Form.Item>
                        <Form.Item label="New password" name="new_password" rules={[{required: true}, {min: 6}]}>
                            <Input placeholder="New password" type="password" />
                        </Form.Item>
                        <Button htmlType="submit">Update</Button>
                        </Space>
                    </Form>
                </div>
            </Drawer>
            <Layout style={{ marginLeft: collapsedWidth == 0 ? 0 : 80 }}>
                { collapsedWidth == 0 &&
                    <Header>
                        {
                            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })
                        }
                    </Header> 
                }
                <Content>                    
                    <div className="p-5">
                        <div style={{float: 'right'}}><UserOutlined/> {props.user.first_name}</div>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );

}

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        isTokenExpired: state.Auth.isTokenExpired,
        isAuthenticated: state.Auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(withRouter(BookingLayout))
