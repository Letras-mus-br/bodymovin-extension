import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import BaseButton from '../buttons/Base_button'
import Variables from '../../helpers/styles/variables'
import {
    goToPreview, 
    goToPlayer, 
    goToImportFile,
    goToAnnotations,
    goToComps,
} from '../../redux/actions/compositionActions'
import {connect} from 'react-redux'
import {routes} from '../../redux/reducers/routes'

console.log('routes', routes)

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: '10px'
    },
    right: {
      marginRight:'7px',
    },
    buttons_container: {
    	width: '100%',
    	height: '50px',
        display: 'flex',
        alignItems:'center'
    },
    button: {
        marginRight:'7px',
        flex: '0 0 auto',
    },
    buttons_separator: {
        flex: '1 1 auto',
    },
    refresh: {
    	width: '40px',
    	height: '31px',
    	backgroundColor: 'transparent',
      	verticalAlign:'middle',
        cursor: 'pointer',
        transition: 'transform 500ms ease-out',
        webkitFilter: 'saturate(100%)'
    },
    refresh_image: {
    	maxWidth: '100%',
    	maxHeight: '100%'
    },
    separator: {
    	width: '100%',
    	height: '1px',
    	backgroundColor: Variables.colors.gray2,
    	marginTop: '10px',
    	marginBottom: '10px'
    }
})

function BaseHeader(props) {
	return (<div className={css(styles.container)}>
				<div className={css(styles.buttons_container)}>
                    {props.currentRoute !== routes.compositions &&
                        <BaseButton text='Compositions' type='gray' classes={styles.right} onClick={props.goToComps}/>
                    }
					<BaseButton text='Preview' type='gray' classes={styles.button} onClick={props.goToPreview} />
                    <div className={css(styles.buttons_separator)}></div>
                    <BaseButton text='Import Lottie Animation' type='gray' classes={styles.right} onClick={props.goToImportFile}/>
                    <BaseButton text='Get the Player' type='gray' classes={styles.right} onClick={props.goToPlayer}/>
					{props.currentRoute !== routes.annotations &&
                        <BaseButton text='Annotations' type='gray' classes={styles.right} onClick={props.goToAnnotations}/>
                    }
				</div>
                <div className={css(styles.separator)} />
			</div>)
}

function mapStateToProps(state) {
    return {
        currentRoute: state.routes.route
    }
}

const mapDispatchToProps = {
    goToComps: goToComps,
    goToPreview: goToPreview,
    goToPlayer: goToPlayer,
    goToImportFile: goToImportFile,
    goToAnnotations: goToAnnotations,
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseHeader)