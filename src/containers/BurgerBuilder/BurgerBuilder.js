import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import {notification} from 'antd'
import LoginButton from '../../components/UI/LoginButton/LoginButton'
import SignUp from '../../components/UI/SignUp/SignUp'
import './BurgerBuilder.css'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'


const INGREDIENT__PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false,
        loading: false,
    }
    

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.setState({loading:true})

        notification.open({
            message: 'Order Finalization',
            description:
              'The establishment just started producing your order. It will arrive to your address in 25 minutes aproximatedly',
            onClick: () => {
            },
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Max',
                address: {
                    street: 'teststreet',
                    zipcode: '12345',
                    country: 'Germany'
                },
                email: 'teste@teste.com'
            },
            deliveryMethod: 'free'
        }
        axios.post('/orders.json', order)
            .then(response =>{
                this.setState({loading: false, purchasing: false})
            })
            .catch( error => {
                this.setState({loading: false, purchasing: false})
            })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(
            key => {
                return ingredients[key];
            }).reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchaseable: sum > 0})
  
    }

    addIngredientHandler = (type) => {
        let updatedCount = 0
        const oldCount = this.state.ingredients[type]
        if((parseInt(this.state.ingredients.bacon,10) + 
            parseInt(this.state.ingredients.salad,10) + 
            parseInt(this.state.ingredients.cheese,10) + 
            parseInt(this.state.ingredients.meat,10)) < 10){
                updatedCount = oldCount +1
                const updatedIngredients = {
                    ...this.state.ingredients
                };
                updatedIngredients[type] = updatedCount;
                const priceAddition = INGREDIENT__PRICES[type];
                const oldPrice = this.state.totalPrice;
                const newPrice = oldPrice + priceAddition;
                this.setState({
                    totalPrice: newPrice, ingredients: updatedIngredients
                })
                this.updatePurchaseState(updatedIngredients);
            }else updatedCount = oldCount
            
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT__PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }


    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary 
        price={this.state.totalPrice.toFixed(2)}
        ingredients={this.state.ingredients}/>

        if(this.state.loading){
            orderSummary = <Spinner />
        }

        return(
            <div>
                <Modal show={this.state.purchasing} 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}>
                    {orderSummary}
                </Modal>
                <div className='buttons'>  
                    <div className='spacer'>
                        <LoginButton/>
                        <SignUp/>
                    </div>
                </div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchaseable = {this.state.purchaseable}
                    ordered = {this.purchaseHandler}/>
                
            </div>
        );
    }
}

export default BurgerBuilder