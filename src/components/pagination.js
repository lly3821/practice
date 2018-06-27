import React,{Component} from 'react'
import './page.css'

class Pagination extends Component{
    
    goPrev(prevpage){
        if(--prevpage===0)
            return ;
        else return this.props.gotoCurrent(prevpage)
    }
    goNext (nextpage){
        const totalpage = Math.ceil(this.props.total/this.props.pagesize)
        if(++nextpage===totalpage+1)
            return ;
        else return this.props.gotoCurrent(nextpage)
    }
    SizeChange(e){
        const newsize = e.target.options[e.target.selectedIndex].value
        this.props.SizeChange(newsize)
    }
    jumpTo(e){
        const totalpage = Math.ceil(this.props.total/this.props.pagesize)
        const topage = Number(e.target.value)
        if(e.which === 13){
            if(topage <= totalpage && topage >=1)
                this.props.gotoCurrent(topage)
        }
    }

    createPages(){
        const {total,current,pagesize} = this.props
        let prevpage = current
        let nextpage = current
        const totalpage = Math.ceil(total/pagesize)
        let pages = []

        pages.push(<li key={0} className={current===1?'nomore':'pre'} onClick = {this.goPrev.bind(this,prevpage)}>上一页</li>)
        if(totalpage <= 5){
            for (let i=1 ; i<= 5 ; i++){
                pages.push(<li className={i===current?'active':''} onClick = {this.props.gotoCurrent.bind(this,i)} key={i}>{i}</li>)
            }
        }
        else{
            pages.push(<li key={1} className={current===1?'active':''} onClick = {this.props.gotoCurrent.bind(this,1)}>1</li>)
            if (current < 4){
                for (let i=2; i<= 4; i++){
                    pages.push(<li className={i===current?'active':''} onClick = {this.props.gotoCurrent.bind(this,i)} key={i}>{i}</li>)
                }
                pages.push(<li key={-1} className='ellipsis'>...</li>)
            }
            else if (current <= totalpage -3){
                pages.push(<li key={-2} className='ellipsis'>...</li>)
                for (let i=current-1; i<= current+1 ; i++){
                    pages.push(<li className={i===current?'active':''} onClick = {this.props.gotoCurrent.bind(this,i)} key={i}>{i}</li>)
                }
                pages.push(<li key={-1} className='ellipsis'>...</li>)
            }
            else{
                pages.push(<li key={-2} className='ellipsis'>...</li>)
                for (let i=totalpage-3; i<= totalpage-1; i++){
                    pages.push(<li className={i===current?'active':''} onClick = {this.props.gotoCurrent.bind(this,i)} key={i}>{i}</li>)
                }
            }
            pages.push(<li key={ totalpage } className = { current === totalpage ? 'active':''} onClick = { this.props.gotoCurrent.bind(this,totalpage) }>{ totalpage }</li>)
        }
        pages.push(<li key={totalpage+1} className={current===totalpage?'nomore':'next'} onClick = {this.goNext.bind(this,nextpage)}>下一页</li>)
        return pages
    }  
    
    render(){
        const pages = this.createPages(this.props)
        return(
            <div>
                <ul className='page'>
                    {pages}
                </ul>
                <select onChange={this.SizeChange.bind(this)}>
                    <option value = {3} >3/页</option>
                    <option value = {5} >5/页</option>
                    <option value = {10} >10/页</option>
                </select>
                <span className='jump'>跳至</span>
                <input className='jumpto' placeholder='页码' onKeyDown={this.jumpTo.bind(this)}/>
            </div>
        )
    }
}
export default Pagination