import React, { Component } from 'react'

class Counter extends Component {
	
	state = {  
		count: 0,
		tags: []
	};

	renderTags( ) {
        // 만약에 상태 객체의 프로퍼티가 존재하지 않으면 메시지를 리턴하고 
        if(this.state.tags.length === 0) return <p> 아이템이 존재하지 않습니다.</p>;
        // 존재하면 Jsx로 리스트를 뿌려라  
        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag}</li> )}</ul>;
	}
	
	
	render() { 

		return (  
			<div>
				<span className={this.getBadge()}>
					{this.formatCount()}</span>
				<button style={this.styles}
				className="btn btn-success btn-sm">
					증가</button>
					<div>
						{this.renderTags()}
					</div>
			</div>
		);
	}

	getBadge() {
		let classes = "badge m-2 badge-";
		classes += (this.state.count <= 0) ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		var x = <h1>zero</h1>
		return count === 0 ? x : count;
	}
}
 
export default Counter;