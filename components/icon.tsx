import Image from "next/image";

export interface IItemProps {
    imgsrc:string;
    text:string;
    iwidth:number;
    iheight:number;
    svg_mode?:boolean;
    onClick?:Function;
    className?:string;
    disabled?:boolean;
}

export interface IItemsWrapperProps {
    className?:string;
    disabled?:boolean;
    children:React.ReactElement[] | React.ReactElement;
}

const ItemsWrapper = (props:IItemsWrapperProps) => {
    return (
        <div className={`flex flex-col md:flex-row justify-none justify-center ${props.className}`}>
            {!props.disabled && props.children}
        </div>
    );
}

const Item = (props:IItemProps) => {

    const onClick = (e:any) => {
        if (props.onClick)
            props.onClick(e);
    }

    return (
        <div className={`mx-auto mb-10 md:mb-0 md:mx-10 w-40 h-40  ${props.className}`} onClick={e => onClick(e)}>
            <Image className="w-fit px-4" src={props.imgsrc} alt={props.text} width={props.iwidth} height={props.iheight}/>
            <h3 className="text-2xl text-center">
                <b>
                    {props.text}
                </b>
            </h3>        
        </div>
    );
}

export {ItemsWrapper, Item};