import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaisComponent } from './components/pais/pais.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';
import { RelacionComponent } from './components/relacion/relacion.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'paises', component: PaisComponent },
  { path: 'departamentos', component: DepartamentoComponent },
  { path: 'municipios', component: MunicipioComponent },
  { path: 'empresas', component: EmpresaComponent },
  { path: 'colaboradores', component: ColaboradorComponent },
  { path: 'relaciones', component: RelacionComponent }, 
  
];
