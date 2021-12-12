import { mount } from '@vue/test-utils'
import Account from '@/components/Account.vue'

describe('Account.vue', () => {

    let mockedData = {
        username: "Juan",
        Password: "RJT334",
        
    }

    let wrapper = mount(Account, {
        data() {
            return mockedData
        }
    });

    it('La asignación de datos al componente Account no funciona de acueedo con lo esperado', async() => {

        expect(wrapper.text()).toMatch("Información de su cuentaNombre: JuanSaldo: 30000 COP Correo electrónico: email@hotmail.com");
    });
})