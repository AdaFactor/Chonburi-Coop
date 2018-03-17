import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import SlideMenu from './SlideMenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

export default class DrawerNav extends Component {
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SlideMenu />}
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                tabToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closeDraweroffset={-3}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2-ratio)/2 }
                })}
            >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: {
        shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 1
    },
    main: { paddingLeft: 0 }
}