// import React, {Component} from 'react';
// import ModuleListItem from '../components/ModuleListItem';
//
// class ModuleList extends Component {
//     render() {
//         return (
//             <ul className="list-group">
//                 <ModuleListItem/>
//                 <ModuleListItem/>
//                 <ModuleListItem/>
//                 <ModuleListItem/>
//                 <ModuleListItem/>
//             </ul>
//         );
//     }
// }
//
// export default ModuleList;

import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem';

class ModuleList extends Component {
    constructor(props) { super();
        this.state = {
            module: {title:''},
            modules: [
                {title: 'React',id:123},
                {title: 'Redux',id:456},
                {title: 'React Native',id:789},
            ]
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule(event) {
        console.log(this.state.module);
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function(module) {
                return <ModuleListItem key={module.id} title={module.title} />;
            });

        return modules;
    }

    render() {
        return (
            <div>
                <input className="form-control" placeholder="Title" onChange={this.titleChanged}></input>
                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
                    );
    }
}

export default ModuleList;
